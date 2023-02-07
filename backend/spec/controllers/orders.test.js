// require('dotenv').config({path: './.env.development'});

// const app = require("../../index");
// const request = require("supertest");
const Order = require('../../models/order');
const Orders = require('../../controllers/orders')
const User = require('../../models/user');
const mongoose = require("mongoose");
// const secret = process.env.JWT_SECRET;

describe("updateOrder", () => {
  // beforeEach(() => {
  //   const MongoClient = require("mongodb").MongoClient;
  //   const uri = "mongodb+srv://<admin>:<F2M2qX-$uHm6d$F>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
  //    client = new MongoClient(uri, { useNewUrlParser: true, socketTimeoutMS: 120000, });
  //   // client.close();
  // })

  jest.setTimeout(50000)
  let req, res;
  beforeEach(() => {
    req = {
      user_id: mongoose.Types.ObjectId(),
      params: {
        order_id: mongoose.Types.ObjectId()
      },
      body: {
        orders: ["1", "2", "3"],
        date_required: ''
      }
    };
    res = {
      status: jest.fn().mockReturnValue({
        json: jest.fn()
      })
    };
  });


  it("updates an order", async () => {
    const user = new User({ _id: req.user_id });
    try {
      await user.save();
    } catch (err) {
      throw err
    }
    const order = new Order({
      _id: req.params.order_id,
      date_of_order: new Date(),
      date_required: '02/02/2023'
    });
    await order.save();

    await Orders.updateOrder(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.status().json).toHaveBeenCalledWith({
      message: "OK",
      token: expect.any(String)
    });
    const updatedOrder = await Order.findById(req.params.order_id);
    expect(updatedOrder.date_required).toEqual(req.body.date_required);
  });

  // it("creates an order", async () => {
  //   const user = new User({ _id: req.user_id });
  //   await user.save();
  //   const order = new Order({
  //     _id: req.params.order_id,
  //     date_of_order: new Date(),
  //     date_required: '02/02/2023'
  //   });
  //   await order.save();

  //   await Orders.createOrder(req, res);
  //   expect(res.status).toHaveBeenCalledWith(201);
  //   expect(res.status().json).toHaveBeenCalledWith({
  //     message: "OK",
  //     token: expect.any(String)
  //   });
  //   const newOrder = await Order.findById(req.params.order_id);
  //   expect(updatedOrder.date_required).toEqual(req.body.orders);
  // });

  describe("getAllOrders", () => {
    beforeEach(async () => {
      await Order.deleteMany({});
      await Order.create({ userId: "12345", company: "ABC Inc", order: "Product 1" });
      await Order.create({ userId: "12345", company: "XYZ Inc", order: "Product 2" });
    });

    it("should return all orders for the user", async () => {
      const response = await request(app)
        .get("/orders")
        .set("Authorization", "Bearer 12345")
        .expect(200);

      expect(response.body.orders).toHaveLength(2);
      expect(response.body.token).toBeDefined();

    });

    it("should return 401 Unauthorized if the user is not logged in", async () => {
      const response = await request(app)
        .get("/orders")
        .expect(401);

      expect(response.body.message).toBe("Unauthorized");
    });

    it("should return an empty array if there are no orders for the user", async () => {
      const response = await request(app)
        .get("/orders")
        .set("Authorization", "Bearer 56789")
        .expect(200);

      expect(response.body.orders).toHaveLength(0);
      expect(response.body.token).toBeDefined();
    });
  });

  describe("PATCH /orders/:id", () => {
    beforeEach(async () => {
      await Order.deleteMany({});
      await Order.create({ userId: "12345", company: "ABC Inc", order: "Product 1" });
    });

    it("should update the order", async () => {
      const order = await Order.findOne({ company: "ABC Inc" });
      const dateRequired = new Date();

      const response = await request(app)
        .patch(`/orders/${order._id}`)
        .send({ date_required: dateRequired })
        .set("Authorization", "Bearer 12345")
        .expect(200);

      const updatedOrder = await Order.findById(order._id);
      expect(updatedOrder.date_required).toEqual(dateRequired);
      expect(response.body.message).toBe("OK");
      expect(response.body.orders).toBeDefined();
      expect(response.body.token).toBeDefined();
    });

    it("should return 401 Unauthorized if the user is not logged in", async () => {
      const order = await Order.findOne({ company: "ABC Inc" });
      const dateRequired = new Date();

      const response = await request(app)
        .patch(`/orders/${order._id}`)
        .send({ date_required: dateRequired })
        .expect(401);

        expect(response.body.message).toBe("Unauthorized");
    });
  });

  describe("Create orders", () => {
    beforeEach(async () => {
      await Order.deleteMany({});
    });

    it("should create an order and return it along with a token", async () => {
      const response = await request(app)
        .post("/orders")
        .set("Authorization", "Bearer 12345")
        .send({ userId: "12345", company: "ABC Inc", order: "Product 1" })
        .expect(201);

      expect(response.body.orders).toHaveLength(1);
      expect(response.body.token).toBeDefined();
    });

    it("should return a 400 error if there is an error in the database query", async () => {
      const errorStub = jest.spyOn(Order, "find").mockImplementationOnce(cb => cb(new Error("Database error")));

      const response = await request(app)
        .get("/orders")
        .set("Authorization", "Bearer 12345")
        .expect(400);

      expect(response.body.error).toEqual("Database error");
      errorStub.mockRestore();
    });
  });
});
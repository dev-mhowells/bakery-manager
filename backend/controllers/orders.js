const Order = require("../models/order");
const TokenGenerator = require("../models/token_generator");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const OrdersController = {
  getAll: (req, res) => {
    Order.find({userId: req.user_id})
    .exec((err, orders) => {
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      if(err) return res.status(400).send(err);
      res.status(200).json({ orders: orders, token: token });
    })
  },
  // getAll: (req, res) => {
  //   console.log("GET ORDERS")
  //   Order.find(async (err, orders) => {
  //     if (err) {
  //       console.log(err)
  //       throw err;
  //     }
  //     const token = await TokenGenerator.jsonwebtoken(req.user_id);
  //     console.log("orders:", orders)
  //     res.status(200).json({ orders: orders, token: token });
  //   });
  // },
  createOrder: (req, res) => {
    User.find({_id: req.user_id }, function (err, docs)
    {
      if (err) {
        throw err;
      }
    })
    console.log("POST ORDER")
    console.log(req.body)
    const order = new Order({userId: req.user_id, company: req.body.company, order: req.body.order
      // date_of_order: req.body.date_of_order, date_required: req.body.date_required 
    });
    console.log("NEW ORDER: ", order)
    order.save(async (err) => {
      if (err) {
        throw err;
      }
      Order.find(async (err, orders) => {
        if (err){
          throw err;
        }
        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.status(201).json({ message: "OK", orders: orders, token: token});
      })
    }
  )},
  updateOrder: async(req, res) => {
    User.find({_id: req.user_id }, function (err)
    {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token});
    })
    const filter = { _id: req.params.order_id};
    const update = { date_of_order: new Date, date_required: req.body.date_required }
    await Order.findByIdAndUpdate( req.params.order_id, update);
    const order = await Order.find(filter)
    return order
  }

}




module.exports = OrdersController
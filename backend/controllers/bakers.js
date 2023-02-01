const { restart } = require("nodemon");
const Baker = require("../models/baker");

const BakersController = {
  getAll: (req, res) => {
    console.log("GET CONFIRMED ORDERS")
    try {
      Baker.find((err, orders) => {
        if (err) throw err;
        console.log("Confirmed Orders:", orders)
        res.status(200).json({ confirmedOrder:  orders });
      });
    } catch (err) {
      console.error("Error retrieving confirmed orders", err);
      res.status(500).json({message: "Error retrieving orders"})
    }
    // Baker.find(async (err, orders) => {
    //   if (err) {
    //     console.error("Error retrieving orders:", err);
    //   }
    //   console.log("Confirmed Orders:", orders)
    //   res.status(200).json({ confirmedOrder:  orders });
    // });
  },

  getBakerById: (req, res, next) => {
    try {
      const baker = Baker.findById(req.params.id);
      if (baker == null) {
        return res.status(404).json({ message: "Cannot find baker" });
      }
      res.baker = baker;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  createBaker: (req, res) => {
    console.log("POST Baker")
    const baker = new Baker(req.body);
    console.log("NEW Baker: ", baker)
    baker.save(async (err) => {
      if (err) {
        throw err;
      }
      const allBakers = await Baker.find()
      res.status(201).json({bakers: allBakers});
    }
  )},

  // getByBakerId: (req, res) => {
  //   console.log("Confirm order")
  //   const orderId = req.order._id
  //   Baker.find(async (err, orders) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log("Orders:", orders)
  //     res.status(200).json({ orders:  orders });
  //   });
  // },
}


module.exports = BakersController
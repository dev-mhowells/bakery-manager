const Baker = require("../models/baker");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const TokenGenerator = require("../models/token_generator");

const BakersController = {
  getAll: (req, res) => {
    Baker.find({userId: req.user_id})
    .exec((err, bakers) => {
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      if(err) return res.status(400).send(err);
      res.status(200).json({ bakers: bakers, token: token });
    })
  },
  getBakerByOrderId: (req, res) => {
    Baker.find({orderId: req.params.orderId})
    .exec((err, bakers) => {
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      if(err) return res.status(400).send(err);
      res.status(200).json({ bakers: bakers, token: token });
    })
  },

  // getBakerById: (req, res, next) => {
  //   try {
  //     const baker = Baker.findById(req.params.id);
  //     if (baker == null) {
  //       return res.status(404).json({ message: "Cannot find order" });
  //     }
  //     res.baker = baker;
  //     next();
  //   } catch (err) {
  //     return res.status(500).json({ message: err.message });
  //   }
  // },



  createBaker: (req, res) => {
    User.find({_id: req.user_id }, function (err, docs)
    {
      if (err) {
        throw err;
      }
    })
    const baker = new Baker({userId: req.user_id, orderId: req.body.orderId, confirmedOrder: req.body.confirmedOrder});
    baker.save(async (err) => {
      if (err) {
        throw err;
      }
      Baker.find(async (err, bakers) => {
        if (err){
          throw err;
        }
        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.status(201).json({ message: "OK", bakers: bakers, token: token});
      })
    }
  )
  },
}

module.exports = BakersController
const Item = require("../models/item");

const ItemsController = {
  getAll: (req, res) => {
    console.log("GET ITEMS")
    Item.find(async (err, items) => {
      if (err) {
        throw err;
      }
      console.log("items:", items)
      res.status(200).json({ items:  items });
    });
  },
  createItem: (req, res) => {
    console.log("POST ITEM")
    const item = new Item(req.body);
    console.log("NEW ITEM: ", item)
    item.save(async (err) => {
      if (err) {
        throw err;
      }
      const allItems = await Item.find()
      res.status(201).json({items: allItems});
    }
  )},
}


module.exports = ItemsController
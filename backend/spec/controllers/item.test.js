require('dotenv').config({path: './.env.test'});
const app = require("../../index");
const request = require("supertest");
const Item = require('../../models/item');

describe('/items', () => {

      let server
    
      beforeEach( async () => {

        if (server) {
          server.close();
        }

        server = app.listen(3001);
        await Item.deleteMany({});
      })
    
      afterEach( async () => {
        server.close();
        await Item.deleteMany({});
      })

      it('Gets items in a database', async () => {
        let item1 = new Item({
            "item_name": "berry", "cost_to_bake": 0.25, "ingredients": [["flour",100],["eggs",2]],
            "batch_quantity": 12,
            "__v": 0
        });
    
        await item1.save();

        let response = await request(app)
            .get("/items")
    
        let items = response.body.items.map((item) => ( item.item_name ));
        expect(items).toEqual(["berry"]);
    
    })
  
});
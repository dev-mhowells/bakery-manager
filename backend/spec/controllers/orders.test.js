// require('dotenv').config({path: './.env.test'});
// // const { request } = require('express');
// const app = require("../../index");
// const request = require("supertest");
// const Order = require('../../models/order');
// const BatchOrder = require("../../models/BatchOrder");

// describe('/orders/addBatch', () => {
    
//       beforeEach( async () => {
//         await Item.deleteMany({});
//       })
    
//       afterAll( async () => {
//         await Item.deleteMany({});

//       })

//       test('creates a batch and adds to an Order', async () => {

//         const BatchOrder = {item: "apple muffin", batch_quantity: 11}

//         const response = await request(app).post('/orders/addBatch').send(BatchOrder)

//         expect(response.statusCode).toBe(200);
//         // expect(response.body).toEqual({ message: 'Example route' });

//       })
  
// });

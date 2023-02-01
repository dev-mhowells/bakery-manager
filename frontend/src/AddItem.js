import React from "react";
import { useState } from "react";

export default function AddItem() {

    const [item, setItem] = useState('')
    const [price, setPrice] = useState('')
    const [costToBake, setCostToBake] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [batchQuantity, setBatchQuantity] = useState('')

    console.log(item)

    const item1 = {
        itemName: 'muffin one',
        price: 11,
        image: 'placeholder image',
        costToBake: 4,
        ingredients: ['banana', 'juice'],
        batchQuantity: 12
    }

    const item2 = {
        itemName: 'muffin two',
        price: 10,
        image: 'placeholder image',
        costToBake: 2,
        ingredients: ['banana', 'orange'],
        batchQuantity: 6
    }

    const allItems = [item1, item2]

    const addItem = () => {
        const itemObj = 
            {itemName: item,
            price,
            image: 'placeholder image',
            costToBake,
            ingredients,
            batchQuantity}
    }

    const itemDisplay = allItems.map((item) => {
        return (
            <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.itemName}</div>
            </div>
          </div>
        </td>
        <td>
          {item.price}
          <br/>
        </td>
        <td>{item.costToBake}</td>
        <td>
          {item.ingredients}
        </td>
        <td>{item.batchQuantity}</td>
        <th>
          {/* <button className="btn btn-ghost btn-xs"></button> */}
        </th>
      </tr>
        )}
        )

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Cost to Bake</th>
                        <th>ingredients</th>
                        <th>Batch Quantity</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {itemDisplay}
                    </tbody>    
                </table>
            </div>
                        {/* The button to open modal */}
            <label htmlFor="my-modal-5" className="btn">add item</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Add new item</h3>
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Item" 
                        className="input input-bordered" 
                        value={item}
                        onChange={(e) => setItem(e.target.value)}/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="price" 
                        className="input input-bordered"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cost to bake</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Cost to bake" 
                        className="input input-bordered" 
                        value={costToBake}
                        onChange={(e) => setCostToBake(e.target.value)}/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="ingredients" 
                        className="input input-bordered" 
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}/>/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Batch Quantity</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Batch Quantity" 
                        className="input input-bordered" 
                        value={batchQuantity}
                        onChange={(e) => setBatchQuantity(e.target.value)}/>/>
                        </div>
                        <div className="form-control mt-6">
                        <label className="btn btn-primary" htmlFor="my-modal-5">Add</label>
                        </div>
                    </div>
                    <div className="modal-action">
                    <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
                </div>
        </div>
    )
}
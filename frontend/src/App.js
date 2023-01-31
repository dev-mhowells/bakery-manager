import './styles.css';
import React from 'react';
import { useState } from 'react';


function Item({food}) {

  const [counter, setCounter] = useState(0)

  const increaseCount = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }
  
  const decreaseCount = () => {
    setCounter((prevCounter) => prevCounter - 1)
  }
  

  return (
    <div class="bg-green card w-96 bg-base-100 shadow-xl card-bordered">
  <figure><img src=""/></figure>
      <div class="card-body">
        <div class="bg-green text-bone">
          <h1 class="card-title heading">{food.itemName}</h1>
          <p>Price: {food.price}</p>
          <p>Batch Quantity: {food.batchQuantity}</p>
        </div>
    <div class="card-actions justify-end">
      <button class='btn'onClick={increaseCount}>+</button>
      <p>{counter}</p>
      <button class='btn' onClick={decreaseCount}>-</button>
      <button class="bg-bone btn btn-primary">Add to basket</button>
    </div>
  </div>
</div>
  )
}

function App() {
  // const [data, setData] = useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const blueberryMuffin = {
    price: 22,
    itemName: 'Blueberry Muffin',
    batchQuantity: 12
  }
  
  const raspberryMuffin = {
    price: 25,
    itemName: 'Raspberry Muffin',
    batchQuantity: 12
  }
  
  const chickenMuffin = {
    price: 2,
    itemName: 'Chicken Muffin',
    batchQuantity: 22
  }
  
  const items = [blueberryMuffin, raspberryMuffin, chickenMuffin]

  const itemsDisplay = items.map((food) => {
    return <Item food={food}></Item>
  })

  return (
    <div class='flex'>
      {itemsDisplay}
    </div>
  );
}

export default App;

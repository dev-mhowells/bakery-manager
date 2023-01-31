import './styles.css';
import React from 'react';
import { useState } from 'react';
import Item from './Item';

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

  const lemonDrizzleCake = {
    price: 20,
    itemName: 'Lemon Drizzle Cake',
    batchQuantity: 1
  }
  
  const items = [blueberryMuffin, raspberryMuffin, chickenMuffin, lemonDrizzleCake]

  const itemsDisplay = items.map((food) => {
    return <Item food={food}></Item>
  })

  return (
    <div class='flex flex-wrap'>
      {itemsDisplay}

    </div>
  );
}

export default App;

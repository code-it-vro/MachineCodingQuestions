import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [food, setFood] = useState('');
  const [ShoppingList, setShoppingList] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFood(e.target.value);
  };

  const fetchFood = async (food)=>{
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const response = await fetch(url);
    const data = await response.json();
    setShoppingList(data);
    console.log(data);
  }

  useEffect(() => {
    if (food.length >= 2) {
      fetchFood(food);
    }
  }, [food]);

  return (
    <>
      <h1>Shopping List</h1>
      <div className="container">
        <div className="inputbox">
          <input type="text" onChange={handleChange} />
        </div>
        <div className="shopping-list">
          {ShoppingList.map((item)=>{
            return <div className="product">{item}</div>
          })}
        </div>
        <div className="bucket"></div>
      </div>
    </>
  );
}

export default App;

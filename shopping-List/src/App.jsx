import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [food, setFood] = useState("");
  const [ShoppingList, setShoppingList] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFood(e.target.value);
  };

  const handleShoppingList = (e) => {
    const idx = e.target.getAttribute("data-id");
    if (idx) {
      const obj = {
        id: Date.now(),
        data: ShoppingList[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
      console.log(copyBucketList);
    }
    setFood("");
    console.log(e.target.getAttribute("data-id"));
  };

  const fetchFood = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const response = await fetch(url);
    const data = await response.json();
    setShoppingList(data);
    console.log(data);
  };

  useEffect(() => {
    if (food.length >= 2) {
      fetchFood(food);
    }
  }, [food]);

  const handleRightClick = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucketList(newBucketList);
  };

  const handleDelete = (id) => {
    const copyBucketList = [...bucketList];
    const newList = copyBucketList.filter((item) => item.id !== id);
    setBucketList(newList);
  };

  return (
    <>
      <h1>Shopping List</h1>
      <div className="container">
        <div className="inputbox">
          <input type="text" onChange={handleChange} placeholder="enter your food suggestion" />
        </div>
        {food ? (
          <div className="shopping-list" onClick={handleShoppingList}>
            {ShoppingList.map((item, index) => {
              return (
                <div className="product" data-id={index}>
                  {item}
                </div>
              );
            })}
          </div>
        ) : null}
        <div className="bucket">
          {bucketList.map((item) => {
            return (
              <div className="bucket-items">
                <button
                  onClick={() => {
                    handleRightClick(item.id);
                  }}
                >
                  ✅
                </button>
                <div className={item.isDone ? "done" : ""}> {item.data}</div>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  ❌
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

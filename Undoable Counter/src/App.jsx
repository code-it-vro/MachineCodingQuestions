import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoList , setRedoList] = useState([]);

  const maintainHistory = (key, prev, curr) => {
    const obj = {
      action: key,
      prev,
      curr,
    };
    const copyHistory = [...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);
  };

  const handleClick = (key) => {
    const val = parseInt(key);
    setValue((existingValue) => existingValue + val);
    maintainHistory(key, value, val + value);
  };

  const handleUndo = () => {
    if(history.length > 0){
      const copyHistory = [...history];
      const firstItem = copyHistory.shift();
      setHistory(copyHistory);
      const copyRedoList = [...redoList];
      copyRedoList.push(firstItem);
      setRedoList(copyRedoList);
      setValue(firstItem.prev);
    }
  }

  const handleRedo = () => {
    if(redoList.length > 0){
      const copyRedoList = [...redoList];
      const popedValue = copyRedoList.pop();
      setRedoList(copyRedoList);
      const {action , prev, curr} = popedValue;
      setValue(popedValue.curr);
      maintainHistory(action , prev, curr);
    }
  }


  return (
    <>
      <div className="container">
        <h1>Undoable Counter</h1>
        <div className="undo-redo">
          <button className="undo" onClick={handleUndo}>
            Undo
          </button>
          <button className="redo" onClick={handleRedo}>
            Redo
          </button>
        </div>
        <div className="negative-positive">
          {["-100", "-10", "-1"].map((btn) => {
            return (
              <button
                onClick={() => {
                  handleClick(btn);
                }}
              >
                {btn}
              </button>
            );
          })}
          <div className="display">{value}</div>
          {["+1", "+10", "+100"].map((btn) => {
            return (
              <button
                onClick={() => {
                  handleClick(btn);
                }}
              >
                {btn}
              </button>
            );
          })}
        </div>
        <div className="history-block">
          <h3>History</h3>
          <div className="block">
            {history.map((item) => {
              return (
                <div>
                  <span style={{ marginRight: "2rem" }}>{item.action}</span>{" "}
                  {`(${item.prev} -> ${item.curr})`}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

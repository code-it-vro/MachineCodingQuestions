import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert("Please enter time");
      return;
    } else {
      setIsStart(!isStart);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours, timerId);
  };

  const handleReset = () => {
    setIsStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
    setTimerId(0);
    return
  };

const handleInput = (e) => {
  const value = Math.max(0, parseInt(e.target.value) || 0);  
  if (e.target.id === "hours") {
    setHours(value);
  } else if (e.target.id === "minutes") {
    setMinutes(value);
  } else if (e.target.id === "seconds") {
    setSeconds(value);
  }
};


  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (hr > 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
    if (sec === 0 && min === 0 && hr === 0) {
      handleReset();
    }
  };

  useEffect(() => {
    if (isStart && !isPaused) {
      const tid = setInterval(() => {
        setSeconds((s) => {
          if (s > 0) return s - 1;
          setMinutes((m) => {
            if (m > 0) return m - 1;
            setHours((h) => (h > 0 ? h - 1 : 0));
            return 59;
          });
          return 59;
        });
      }, 1000);

      return () => clearInterval(tid);
    }
  }, [isStart, isPaused]);

  return (
    <>
      <div className="main">
        <h1>Countdown Timer</h1>
        {!isStart && (
          <div className="total-container">
            <div className="container">
              <input
                onChange={handleInput}
                type="number"
                id="hours"
                placeholder="HH"
              />
              :
              <input
                onChange={handleInput}
                type="number"
                id="minutes"
                placeholder="MM"
              />
              :
              <input
                onChange={handleInput}
                type="number"
                id="seconds"
                placeholder="SS"
              />
            </div>
            <button className="btn" onClick={handleStart}>
              Start
            </button>
          </div>
        )}

        {isStart && (
          <div className="timer">
            <div className="timer-box">
              <div>{hours < 10 ? `0${hours}` : hours}</div>:
              <div>{minutes < 10 ? `0${minutes}` : minutes}</div>:
              <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
            </div>
            <div className="timer-btn">
              {!isPaused && <button onClick={handlePause}>Pause</button>}
              {isPaused && <button onClick={handleResume}>Resume</button>}
              <button onClick={handleReset}> reset</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

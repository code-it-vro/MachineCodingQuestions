import React, { useEffect, useState } from "react";

const Individual = ({ ques, ind }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (ind == 0) {
      setIsOpen(true);
    }
  }, []);

  return (
    <div className="container">
      <div className="question">
        <button
          className={isOpen ? "rotate" : "btn"}
          onClick={handleClick}
        >{`>`}</button>
        <div>{ques.question}</div>
      </div>
      <div className="answer">{isOpen && <div>{ques.answer}</div>}</div>
    </div>
  );
};

export default Individual;

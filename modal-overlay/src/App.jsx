import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [offer, setOffer] = useState(false);
  const [acceptOffer, setAcceptOffer] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClick = () => {
    setOffer(true);
    setIsModalActive(true);
  };

  const closeModal = () => {
    setOffer(false);
    setIsModalActive(false);
  };

  const handleOffer = () => {
    setAcceptOffer(true);
    setIsModalActive(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isModalActive && !event.target.closest(".modal-box")) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalActive, closeModal]);

  return (
    <div className="app-wrapper">
      {!offer && (
        <div className="button-container">
          <button className="show-offer-button" onClick={handleClick}>
            Show Offer
          </button>
        </div>
      )}

      {offer && !acceptOffer && (
        <div className={`modal-overlay ${isModalActive ? "active" : ""}`}>
          <div className="modal-box">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="modal-message">
              Click the button below to accept our amazing offer
            </div>
            <div className="button-container">
              <button className="accept-button" onClick={handleOffer}>
                Accept Offer
              </button>
            </div>
          </div>
        </div>
      )}

      {acceptOffer && (
        <div className="confirmation-container">
          <div className="confirmation-message">Offer Accepted</div>
        </div>
      )}
    </div>
  );
}

export default App;

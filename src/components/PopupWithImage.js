import React from "react";

function PopupWithImage({ isOpen, src, subtitle, onClose }) {
  let popupStyle = `popup`;
  if (isOpen) {
    popupStyle += " popup_opened";
  }

  return (
    <div className={popupStyle} onClick={onClose}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-icon"
          onClick={onClose}
        ></button>
        <img src={src} alt="#" className="popup__image" />
        <p className="popup__img-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default PopupWithImage;

import React from "react";

function PopupWithForm({ isOpen, title, name, childForm, onClose}) {
  let popupStyle = `popup popup-${name}`;
  if (isOpen) {popupStyle += " popup_opened"}

  return (
    <div className={popupStyle}>
      <div className="popup__container popup__container_type_form">
        <button type="button" className="popup__close-icon" onClick={onClose} />
        <p className="popup__title">{title}</p>
        {childForm}
      </div>
    </div>
  );
}

export default PopupWithForm;
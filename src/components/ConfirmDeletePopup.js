import React from "react";
import ConfirmDeleteForm from "./ConfirmDeleteForm";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup({ isOpen, onClose, onSubmit }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Вы уверены?"
      name="delete-card"
      childForm={<ConfirmDeleteForm onSubmit={onSubmit} />}
      onClose={onClose}
    />
  );
}

export default ConfirmDeletePopup;

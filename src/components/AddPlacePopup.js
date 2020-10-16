import React from "react";
import AddPlaceForm from "./AddPlaceForm";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onSubmit }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Новое место"
      name="add"
      childForm={<AddPlaceForm onSubmit={onSubmit} />}
      onClose={onClose}
    />
  );
}

export default AddPlacePopup;

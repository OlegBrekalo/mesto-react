import React from "react";
import EditProfileForm from "./EditProfileForm";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onSubmit }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Редактировать профиль"
      name="edit"
      childForm={<EditProfileForm onSubmit={onSubmit} />}
      onClose={onClose}
    />
  );
}

export default EditProfilePopup;

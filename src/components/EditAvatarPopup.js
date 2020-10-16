import React from "react";
import EditAvatarForm from "./EditAvatarForm";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onSubmit}) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      name="avatar"
      childForm={<EditAvatarForm onSubmit={onSubmit} />}
      onClose={onClose}
    />
  );
}

export default EditAvatarPopup;

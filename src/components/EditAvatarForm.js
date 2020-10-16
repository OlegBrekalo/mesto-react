import React, { useRef } from "react";

function EditAvatarForm({ onSubmit }) {
  const avatarInput = useRef(null);
  const buttonRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const cleanUp = () => {
      avatarInput.current.value = "";
    };
    onSubmit(avatarInput.current.value, buttonRef, cleanUp);
  };

  return (
    <form className="popup__form" autoComplete="off" onSubmit={handleSubmit}>
      <label className="popup__form-label">
        <input
          id="avatar-form_src"
          name="avatar-form_src"
          type="url"
          required
          placeholder="Ссылка на аватар"
          className="popup__input-text avatar-form__input-text_type_src"
          ref={avatarInput}
        />
        <span id="avatar-form_src-error" className="popup__input-error" />
      </label>
      <button type="submit" className="popup__submit-button" ref={buttonRef}>
        Сохранить
      </button>
    </form>
  );
}

export default EditAvatarForm;

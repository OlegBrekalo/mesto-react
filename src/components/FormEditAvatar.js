import React from "react";
import api from "../utils/Api";

function FormEditAvatar({ setAvatar, onClose }) {
  const [newAvatar, setNewAvatar] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(api);
    api
      .updateUserAvatar(newAvatar)
      .then((data) => {
        setAvatar(data.avatar);
        onClose();
      })
      .catch(() => {
        console.log("ERROR");
      });
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
          value={newAvatar}
          onChange={(evt) => setNewAvatar(evt.target.value)}
        />
        <span id="avatar-form_src-error" className="popup__input-error" />
      </label>
      <button type="submit" className="popup__submit-button">
        Сохранить
      </button>
    </form>
  );
}

export default FormEditAvatar;

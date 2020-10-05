import React, { useEffect } from "react";
import api from "../utils/Api";

function FormEditProfile({ profile, setProfile, onClose }) {
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');

  useEffect(() => {
    setName(profile.name);
    setAbout(profile.about);
  }, [profile]);

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    api
      .updateUserInfo(name, about)
      .then((userInfo) => {
        setProfile({ name: userInfo.name, about: userInfo.about });
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
          id="edit-form_name"
          name="edit-form_name"
          type="text"
          required
          minLength={2}
          maxLength={40}
          className="popup__input-text edit-popup__input-text_type_name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <span id="edit-form_name-error" className="popup__input-error" />
      </label>
      <label className="popup__form-label">
        <input
          id="edit-form_about"
          name="edit-form_about"
          type="text"
          required
          minLength={2}
          maxLength={200}
          className="popup__input-text edit-popup__input-text_type_job"
          value={about}
          onChange={(evt) => setAbout(evt.target.value)}
        />
        <span id="edit-form_about-error" className="popup__input-error" />
      </label>
      <button type="submit" className="popup__submit-button">
        Сохранить
      </button>
    </form>
  );
}

export default FormEditProfile;

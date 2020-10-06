import React from "react";
import api from "../utils/api";

function FormAddPlace({cards, setCards, onClose}) {
  const [newName, setNewName] = React.useState("");
  const [newSrc, setNewSrc] = React.useState("");

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    api.addNewCard(newName, newSrc)
      .then( (newCard)=>{
        setCards([newCard, ...cards]);
        onClose();
      });
  }

  return (
    <form className="popup__form" autoComplete="off" onSubmit={handleSubmit}>
      <label className="popup__form-label">
        <input
          id="add-form_name"
          name="add-form_name"
          type="text"
          required
          minLength={1}
          maxLength={30}
          placeholder="Название"
          className="popup__input-text add-form__input-text_type_name"
          onChange={ (evt) => setNewName(evt.target.value)}
        />
        <span id="add-form_name-error" className="popup__input-error" />
      </label>
      <label className="popup__form-label">
        <input
          id="add-form_src"
          name="add-form_src"
          type="url"
          required
          placeholder="Ссылка на картинку"
          className="popup__input-text add-form__input-text_type_src"
          onChange={ (evt) => setNewSrc(evt.target.value)}
        />
        <span id="add-form_src-error" className="popup__input-error" />
      </label>
      <button type="submit" className="popup__submit-button">
        Создать
      </button>
    </form>
  );
}

export default FormAddPlace;

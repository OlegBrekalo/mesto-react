import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Card from "./Card";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

import FormEditProfile from "./FormEditProfile";
import FormAddPlace from "./FormAddPlace";
import FormEditAvatar from "./FormEditAvatar";

import api from "../utils/Api";

function Main() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlaceOpen, setAddPlaceOpen] = useState(false);
  const [isEditAvatarOpen, setEditAvatarOpen] = useState(false);
  const [isImageOpen, setImageOpen] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    about: "",
  });
  const [avatar, setAvatar] = useState();

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({ src: "", subtitle: "" });

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then((data) => {
        const [userInfo, cards] = data;
        setProfile({ name: userInfo.name, about: userInfo.about });
        setAvatar(userInfo.avatar);
        setCards(cards);
      })
      .catch(() => {
        console.log("ERROR");
      });
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, [isEditProfileOpen, isAddPlaceOpen, isEditAvatarOpen, isImageOpen]);

  const closeAllPopups = () => {
    setEditProfileOpen(false);
    setAddPlaceOpen(false);
    setEditAvatarOpen(false);
    setImageOpen(false);

    document.removeEventListener("keydown", handleKeyPress);
  };

  const handlerCardImageClick = (evt) => {
    setSelectedCard({
      src: evt.target.src,
      subtitle: evt.target.parentNode.querySelector(".element__title")
        .textContent,
    });
    setImageOpen(true);
  };

  return (
    <main onKeyDown={handleKeyPress}>
      <Profile
        profile={profile}
        avatar={avatar}
        openEditProfile={setEditProfileOpen}
        openAddPlace={setAddPlaceOpen}
        openEditAvatar={setEditAvatarOpen}
      />
      <section className="elements content-section">
        <ul className="elements__img-grid">
          {cards.map(({ _id, ...item }) => (
            <Card key={_id} onClick={handlerCardImageClick} {...item} />
          ))}
        </ul>
      </section>

      <PopupWithImage
        isOpen={isImageOpen}
        {...selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        isOpen={isEditProfileOpen}
        title="Редактировать профиль"
        name="edit"
        childForm={
          <FormEditProfile
            profile={profile}
            setProfile={setProfile}
            onClose={closeAllPopups}
          />
        }
        onClose={closeAllPopups}
      />

      <PopupWithForm
        isOpen={isAddPlaceOpen}
        title="Новое место"
        name="add"
        childForm={
          <FormAddPlace
            cards={cards}
            setCards={setCards}
            addNewPlace={setProfile}
            onClose={closeAllPopups}
          />
        }
        onClose={closeAllPopups}
      />

      <PopupWithForm
        isOpen={isEditAvatarOpen}
        title="Обновить аватар"
        name="avatar"
        childForm={
          <FormEditAvatar setAvatar={setAvatar} onClose={closeAllPopups} />
        }
        onClose={closeAllPopups}
      />
    </main>
  );
}

export default Main;

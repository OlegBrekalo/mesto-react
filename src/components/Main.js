import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Card from "./Card";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

import FormEditProfile from "./FormEditProfile";
import FormAddPlace from "./FormAddPlace";
import FormEditAvatar from "./FormEditAvatar";

import api from "../utils/api";

function Main({
  isEditProfileOpen,
  setEditProfileOpen,
  isAddPlaceOpen,
  setAddPlaceOpen,
  isEditAvatarOpen,
  setEditAvatarOpen,
  selectedCard,
  setSelectedCard,
}) {
  const [profile, setProfile] = useState({
    name: "",
    about: "",
  });
  const [avatar, setAvatar] = useState();
  const [cards, setCards] = useState([]);

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
  }, [isEditProfileOpen, isAddPlaceOpen, isEditAvatarOpen, selectedCard]);

  const closeAllPopups = () => {
    setEditProfileOpen(false);
    setAddPlaceOpen(false);
    setEditAvatarOpen(false);

    setSelectedCard(null);

    document.removeEventListener("keydown", handleKeyPress);
  };

  const handleClosePopupByClickOutside = (evt) => {
    if (evt.currentTarget === evt.target) {
      closeAllPopups();
    }
  };

  const handleClick = (link, name) => {
    setSelectedCard({
      src: link,
      subtitle: name,
    });
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
            <Card key={_id} {...item} handleClick={handleClick} />
          ))}
        </ul>
      </section>

      <PopupWithImage
        isOpen={!!selectedCard}
        {...selectedCard}
        onClose={closeAllPopups}
        handleClickOutside={handleClosePopupByClickOutside}
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
        handleClickOutside={handleClosePopupByClickOutside}
      />

      <PopupWithForm
        isOpen={isAddPlaceOpen}
        title="Новое место"
        name="add"
        childForm={
          <FormAddPlace
            cards={cards}
            setCards={setCards}
            onClose={closeAllPopups}
          />
        }
        onClose={closeAllPopups}
        handleClickOutside={handleClosePopupByClickOutside}
      />

      <PopupWithForm
        isOpen={isEditAvatarOpen}
        title="Обновить аватар"
        name="avatar"
        childForm={
          <FormEditAvatar setAvatar={setAvatar} onClose={closeAllPopups} />
        }
        onClose={closeAllPopups}
        handleClickOutside={handleClosePopupByClickOutside}
      />
    </main>
  );
}

export default Main;

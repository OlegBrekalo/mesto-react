import React from "react";

function Card({ name, link, likes, onClick }) {
  return (
    <li className="element">
      <button type="button" className="element__remove-icon"></button>
      <img
        src={link}
        alt="#"
        className="element__image"
        onClick={onClick}
        onError={(evt) => {
          evt.target.src =
            "https://images.unsplash.com/photo-1458419948946-19fb2cc296af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
        }}
      />
      <div className="element__footer">
        <h2 className="element__title" title={name}>
          {name}
        </h2>
        <div className="element__like-block">
          <button type="button" className="element__like-icon"></button>
          <p className="element__like-couter">{likes?likes.length:0}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;

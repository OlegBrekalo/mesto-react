import React from "react";
import {onErrorMockImage} from '../utils/constants';

function Card({ name, link, likes, handleClick }) {


  return (
    <li className="element">
      <button type="button" className="element__remove-icon"></button>
      <img
        src={link}
        alt="#"
        className="element__image"
        onClick={() => {handleClick.call(this, link, name)}}
        onError={(evt) => {
          evt.target.src = onErrorMockImage;
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

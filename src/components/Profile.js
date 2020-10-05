import React from "react";

function Profile({ profile, avatar, openEditProfile, openAddPlace, openEditAvatar}) {
  return (
    <section className="profile content-section">
      <div className="profile__avatar-wrapper">
        <img src={avatar} alt="Аватар" className="profile__avatar" onClick={()=> openEditAvatar(true)}/>
      </div>
      <div className="profile__profile-info">
        <h2 className="profile__name">{profile.name}</h2>
        <button
          type="button"
          className="profile__edit-button"
          onClick={() => openEditProfile(true)}
        />
        <p className="profile__job">{profile.about}</p>
      </div>
      <button
        type="button"
        className="profile__add-button"
        onClick={() => openAddPlace(true)}
      />
    </section>
  );
}

export default Profile;

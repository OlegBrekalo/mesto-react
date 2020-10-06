import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../index.css";

function App() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlaceOpen, setAddPlaceOpen] = useState(false);
  const [isEditAvatarOpen, setEditAvatarOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="content">
      <Header />
      <Main
        isEditProfileOpen={isEditProfileOpen}
        setEditProfileOpen={setEditProfileOpen}
        isAddPlaceOpen={isAddPlaceOpen}
        setAddPlaceOpen={setAddPlaceOpen}
        isEditAvatarOpen={isEditAvatarOpen}
        setEditAvatarOpen={setEditAvatarOpen}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;

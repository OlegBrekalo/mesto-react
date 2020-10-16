import React, {useRef} from "react";

function ConfirmDeleteForm({onSubmit}) {
  const buttonRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(buttonRef);
  };

  return (
    <form className="popup__form" autoComplete="off" onSubmit={handleSubmit}>
      <button type="submit" className="popup__submit-button" ref={buttonRef}>
        Да
      </button>
    </form>
  );
}

export default ConfirmDeleteForm;

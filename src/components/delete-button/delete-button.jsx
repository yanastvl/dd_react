import React from "react";
import { events } from "../../store/index.js"

const DeleteButton = () => {
    const handleDeleteArchiveEvents = (evt) =>{
        evt.preventDefault();
        events.deleteArchiveEvents();
      };

    return (
        <button 
            className="delete-button" 
            type="button"
            onClick={handleDeleteArchiveEvents}
            >Удалить все</button>
    )
  }
  export default DeleteButton;

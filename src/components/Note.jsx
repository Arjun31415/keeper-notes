/* eslint-disable react/prop-types */
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
function Note(props) {
  function handleDelete() {
    props.delete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
/* eslint-disable react/prop-types */
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React from "react";
function Note(props) {
  function handleDelete() {
    props.delete(props.id);
  }
  console.log(props);
  return (
    <div className="note" style={{ backgroundColor: props.color }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete} style={{ color: "#3d3535de" }}>
        <DeleteOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;

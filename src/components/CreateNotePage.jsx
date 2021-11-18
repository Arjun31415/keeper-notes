import CreateArea from "./CreateArea";
import Note from "./Note";
import PropTypes from "prop-types";
import React from "react";

function CreateNotePage({ addNote, notes, deleteNote }) {
  return (
    <>
      {/* create note area */}
      <CreateArea addNote={addNote} />

      {/* All the saved notes */}

      <div className="DND-AREA" style={{ height: "100%" }}>
        {notes.map(({ id, content, title, color }, index) => {
          console.log("index of the element: ", index);
          return (
            <div key={id}>
              <Note
                title={title}
                content={content}
                id={id}
                delete={deleteNote}
                color={color}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
CreateNotePage.propTypes = {
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default CreateNotePage;

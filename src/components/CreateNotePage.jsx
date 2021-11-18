import { DndProvider, useDrop } from "react-dnd";

import CreateArea from "./CreateArea";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ItemTypes } from "../utils/constants";
import Note from "./Note";
import PropTypes from "prop-types";
import React from "react";

function CreateNotePage({ addNote, notes, deleteNote, setNotes }) {
  // FIXME: what is to be done on drop?
  // const [{ isOver }, drop] = useDrop(
  //   () => ({
  //     accept: ItemTypes.KNIGHT,
  //     drop: () => moveKnight(x, y),
  //     collect: (monitor) => ({
  //       isOver: !!monitor.isOver(),
  //     }),
  //   }),
  //   [x, y]
  // );
  return (
    <>
      {/* create note area */}
      <CreateArea addNote={addNote} />

      {/* All the saved notes */}
      <DndProvider backend={HTML5Backend}>
        {/* This div is dropable */}
        <div className="DND-AREA-DROP" style={{ height: "100%" }}>
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
      </DndProvider>
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

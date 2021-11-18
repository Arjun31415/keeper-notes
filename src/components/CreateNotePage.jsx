import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";

import CreateArea from "./CreateArea";
import Note from "./Note";
import PropTypes from "prop-types";

function CreateNotePage({ addNote, notes, deleteNote, setNotes }) {
  function handleOnDragEnd(result) {
    console.log(result);
    const items = Array.from(notes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.source.index, 0, reorderedItem);
    setNotes(items);
  }
  return (
    <>
      {/* create note area */}
      <CreateArea addNote={addNote} />
      {/* All the saved notes */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="Arjun-is-amazing">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {notes.map(({ id, content, title, color }, index) => {
                console.log("index of the element: ", index);
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Note
                          title={title}
                          content={content}
                          id={id}
                          delete={deleteNote}
                          color={color}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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

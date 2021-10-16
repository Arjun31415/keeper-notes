import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }
  function deleteNote(id) {
    setNotes((prev) => prev.filter((x) => x.id !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((x) => (
        <Note
          key={x.id}
          title={x.title}
          content={x.content}
          id={x.id}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;

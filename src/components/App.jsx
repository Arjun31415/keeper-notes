import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import SignUp from "./SignUp";

function App() {
  // React hook
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // Spread operator
    // [1,2,3,4]
    setNotes([...notes, newNote]);
  }
  function deleteNote(id) {
    // arrow functions
    setNotes((prev) => prev.filter((x) => x.id !== id));
  }
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/note"
            element={
              <>
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
              </>
            }
          />
          <Route path="/" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

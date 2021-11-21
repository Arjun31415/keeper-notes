import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CreateNotePage from "./CreateNotePage";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  // React hook
  const [notes, setNotes] = useState([]);
  // setNotes({});
  function addNote(newNote) {
    // Spread operator
    // console.log("newNote", newNote);
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
              <CreateNotePage
                addNote={addNote}
                deleteNote={deleteNote}
                notes={notes}
                setNotes={setNotes}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route path="/" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
  // return (
  //   <CreateNotePage
  //     addNote={addNote}
  //     deleteNote={deleteNote}
  //     notes={notes}
  //     setNotes={setNotes}
  //   />
  // );
}
export default App;

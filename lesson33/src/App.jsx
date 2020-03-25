import React, { useState } from "react";
import "./App.css";
import NoteCreator from "./components/NoteCreator";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);

  const addNewNote = newNote => setNotes([...notes, newNote]);

  const sortByPriority = isUp =>
    setNotes([
      ...notes.sort((a, b) => {
        if (isUp) {
          return b.priority - a.priority;
        }
        return a.priority - b.priority;
      })
    ]);

  return (
    <div className="App">
      <NoteCreator addNewNote={addNewNote} />

      <NotesList list={notes} />

      <button onClick={() => sortByPriority(true)} className="sort-up">
        Hight
      </button>
      <button onClick={() => sortByPriority()} className="sort-down">
        Low
      </button>
    </div>
  );
}

export default App;

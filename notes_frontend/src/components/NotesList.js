import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

import "./NotesList.css";

// PUBLIC_INTERFACE
function NotesList() {
  const {
    filteredNotes, selectedNoteId, selectNote
  } = useContext(NotesContext);

  if (filteredNotes.length === 0) {
    return <div className="notes-list__empty">No notes found.</div>;
  }

  return (
    <ul className="notes-list">
      {filteredNotes.map(note => (
        <li
          key={note.id}
          className={`notes-list__item ${selectedNoteId === note.id ? "active" : ""}`}
          onClick={() => selectNote(note.id)}
        >
          <div className="notes-list__title">{note.title || <em>Untitled</em>}</div>
          <div className="notes-list__meta">{new Date(note.updatedAt).toLocaleString()}</div>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;

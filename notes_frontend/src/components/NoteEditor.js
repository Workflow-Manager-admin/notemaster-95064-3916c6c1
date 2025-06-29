import React, { useContext, useState, useEffect } from "react";
import { NotesContext } from "../contexts/NotesContext";

import "./NoteEditor.css";

// PUBLIC_INTERFACE
function NoteEditor() {
  const {
    notes,
    selectedNoteId,
    createNote,
    updateNote,
    deleteNote,
    selectNote,
  } = useContext(NotesContext);

  const selectedNote = notes.find((n) => n.id === selectedNoteId);

  // Local state for editing
  const [title, setTitle] = useState(selectedNote?.title || "");
  const [content, setContent] = useState(selectedNote?.content || "");
  const [editMode, setEditMode] = useState(false);

  // Reset fields when selection changes
  useEffect(() => {
    setTitle(selectedNote?.title || "");
    setContent(selectedNote?.content || "");
    setEditMode(false);
  }, [selectedNoteId]);

  // PUBLIC_INTERFACE
  function handleSave() {
    if (selectedNoteId) {
      updateNote(selectedNoteId, title, content);
      setEditMode(false);
    }
  }

  // PUBLIC_INTERFACE
  function handleDelete() {
    if (selectedNoteId && window.confirm("Delete this note?")) {
      deleteNote(selectedNoteId);
    }
  }

  if (!selectedNote) {
    return (
      <div className="note-editor-placeholder">
        <div>Select a note to view/edit.</div>
      </div>
    );
  }

  return (
    <div className="note-editor">
      {editMode ? (
        <>
          <input
            className="note-editor__title-input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            className="note-editor__content-input"
            placeholder="Start typing..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <div className="note-editor__actions">
            <button className="note-editor__btn accent" onClick={handleSave}>
              Save
            </button>
            <button className="note-editor__btn" onClick={() => setEditMode(false)}>
              Cancel
            </button>
            <button className="note-editor__btn danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="note-editor__title">{selectedNote.title || <em>Untitled</em>}</div>
          <div className="note-editor__content">{selectedNote.content}</div>
          <div className="note-editor__actions">
            <button className="note-editor__btn accent" onClick={() => setEditMode(true)}>
              Edit
            </button>
            <button className="note-editor__btn danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteEditor;

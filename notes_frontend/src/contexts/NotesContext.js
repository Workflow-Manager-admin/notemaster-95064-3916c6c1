import React, { createContext, useState, useCallback } from "react";

/**
 * Context for managing notes CRUD, search, and selection state in the app.
 * For now, uses local state; integrate with REST API by replacing the stubs.
 */

export const NotesContext = createContext();

// PUBLIC_INTERFACE
export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([
    // Sample stubbed notes for demo
    { id: "1", title: "First Note", content: "Welcome to Notes!", updatedAt: new Date().toISOString() },
    { id: "2", title: "Second Note", content: "Add more notes...", updatedAt: new Date().toISOString() },
  ]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // PUBLIC_INTERFACE
  const createNote = useCallback((title, content) => {
    const id = Date.now().toString();
    setNotes((prev) => [
      { id, title, content, updatedAt: new Date().toISOString() },
      ...prev,
    ]);
    setSelectedNoteId(id);
  }, []);

  // PUBLIC_INTERFACE
  const updateNote = useCallback((id, newTitle, newContent) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, title: newTitle, content: newContent, updatedAt: new Date().toISOString() }
          : note
      )
    );
  }, []);

  // PUBLIC_INTERFACE
  const deleteNote = useCallback((id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    setSelectedNoteId((prevId) => (prevId === id ? null : prevId));
  }, []);

  // PUBLIC_INTERFACE
  const selectNote = useCallback((id) => setSelectedNoteId(id), []);

  // PUBLIC_INTERFACE
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // PUBLIC_INTERFACE
  const setSearch = (query) => setSearchQuery(query);

  // PUBLIC_INTERFACE
  const clearSearch = () => setSearchQuery("");

  return (
    <NotesContext.Provider
      value={{
        notes,
        filteredNotes,
        selectedNoteId,
        searchQuery,
        createNote,
        updateNote,
        deleteNote,
        selectNote,
        setSearch,
        clearSearch,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

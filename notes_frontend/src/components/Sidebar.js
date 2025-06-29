import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar() {
  const { searchQuery, setSearch, clearSearch, createNote } = useContext(NotesContext);

  // PUBLIC_INTERFACE
  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <button className="sidebar__new-btn" onClick={() => createNote("Untitled", "")}>
          + New Note
        </button>
      </div>
      <div className="sidebar__search">
        <input
          className="sidebar__search-input"
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <button className="sidebar__clear-search" onClick={clearSearch} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;

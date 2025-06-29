import React from "react";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";

import "./MainContent.css";

// PUBLIC_INTERFACE
function MainContent() {
  /**
   * The main two-panel content area:
   * Left: list of notes, Right: selected note (view/edit or placeholder)
   */
  return (
    <main className="main-content">
      <section className="main-content__list">
        <NotesList />
      </section>
      <section className="main-content__editor">
        <NoteEditor />
      </section>
    </main>
  );
}

export default MainContent;

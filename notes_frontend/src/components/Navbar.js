import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import "./Navbar.css";

// PUBLIC_INTERFACE
function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__accent">Notes</span> Master
      </div>
      <div className="navbar__user">
        <span className="navbar__username">
          {user?.username ?? ""}
        </span>
        <button className="navbar__logout" onClick={logout}>
          Log out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import "./LoginPage.css";

// PUBLIC_INTERFACE
function LoginPage() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // for demo, not used

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim()) {
      login(username, password);
    }
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Sign in to <span className="accent">Notes</span> Master</h2>
        <input
          className="login-form__input"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          autoFocus
        />
        <input
          className="login-form__input"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login-form__btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

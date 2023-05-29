import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import "./../styles/header.scss";

export default function Header() {
  const [username, setUsername] = useState("");

  const getUsername = () => {
    if (localStorage.getItem("token")) {
      fetch("/users", {
        method: "GET",
      })
        .then((response) => response.json)
        .then((data) => {
          console.log(data[0]);
        });
    }
  };

  getUsername();

  return (
    <header>
      <div>
        <div></div>
        <div className="logo">
          <a href="/">Blog</a>
        </div>
        <div>
          <a href="/login">Login</a>
          <p className="username"></p>
        </div>
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="/contact">Contacts</a>
      </nav>
    </header>
  );
}

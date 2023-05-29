import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import "./../styles/header.scss";

export default function Header() {

  const [username, setUsername] = useState("");
  const [loggedUser, setLoggedUser] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('username')){
      setUsername(localStorage.getItem('username'))
      setLoggedUser(true)
    }
  })


  return (
    <header>
      <div>
        <div></div>
        <div className="logo">
          <a href="/">Blog</a>
        </div>
        <div className="user">
          {loggedUser ? <p className="username">{username}</p> : <a href="/login">Login</a>  }
        </div>
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="/contact">Contacts</a>
      </nav>
    </header>
  );
}

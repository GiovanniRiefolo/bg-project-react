import { NavLink } from "react-router-dom";

import "./../styles/header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">Blog</div>
      <nav>
        <a href="/">Home</a>
        <a href="/contact">Contacts</a>
      </nav>
    </header>
  );
}

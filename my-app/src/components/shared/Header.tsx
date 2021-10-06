import React from "react";
import { Link } from "react-router-dom";
import style from '../../App.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

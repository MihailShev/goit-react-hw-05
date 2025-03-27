import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        MoviesPage
      </NavLink>
    </nav>
  );
}

export default Navigation;

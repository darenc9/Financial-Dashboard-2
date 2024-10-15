import { NavLink } from "react-router-dom";
import styles from "./nav-links.module.css";

const Navlinks = () => {
  return (
    <ul className={styles.navLinks}>
      <li>
        <NavLink to="/">PROFILE</NavLink> {/* Removed exact prop */}
      </li>
      <li>
        <NavLink to="/all-events">DOCS</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">HELP</NavLink>
      </li>
      <li>
        <NavLink to="/blog">LOGOUT</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;

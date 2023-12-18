// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Us
        </Link>,
        <Link key={3} className="nav-link text-light" to="/projects">
          Projects
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
      ]}
    />
  );
}

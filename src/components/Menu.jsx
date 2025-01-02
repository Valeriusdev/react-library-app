import { NavLink } from "react-router-dom";

const Menu = ({ className }) => {
  return (
    <nav className={className}>
      <NavLink
        to="/"
        className="font-medium text-white hover:text-blue-400 mx-4 border border-white rounded-full px-4 py-2"
      >
        Home
      </NavLink>
      <NavLink
        to="/books"
        className="font-medium text-white hover:text-blue-400 mx-4 border border-white rounded-full px-4 py-2"
      >
        Books
      </NavLink>
      <NavLink
        to="/about"
        className="font-medium text-white hover:text-blue-400 mx-4 border border-white rounded-full px-4 py-2"
      >
        About
      </NavLink>
      <NavLink
        to="/contacts"
        className="font-medium text-white hover:text-blue-400 mx-4 border border-white rounded-full px-4 py-2"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;

import { NavLink } from "react-router-dom";

const Menu = ({ className }) => {
  const linkStyle = ({ isActive }) => 
    `font-medium ${isActive ? 'text-blue-200' : 'text-white'} hover:text-blue-400 mx-4 border border-white rounded-full px-4 py-2`;

  return (
    <nav className={className}>
      <NavLink to="/" end className={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/books" className={linkStyle}>
        Books
      </NavLink>
      <NavLink to="/about" className={linkStyle}>
        About
      </NavLink>
      <NavLink to="/contacts" className={linkStyle}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;

import { Link } from "react-router-dom";

const Menu = ({ className }) => {
  return (
    <nav className={className}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

export default Menu;

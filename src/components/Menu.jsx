import { Link } from "react-router-dom";

const Menu = ({ className }) => {
  return (
    <nav className={className}>
      <Link to="/" className="font-medium text-white hover:text-blue-400" >Home</Link>
      <Link to="/about" className="font-medium text-white hover:text-blue-400" >About</Link>
      <Link to="/contacts" className="font-medium text-white hover:text-blue-400">Contacts</Link>
    </nav>
  );
};

export default Menu;

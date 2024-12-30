import { Link } from "react-router-dom";

const Menu = ({ className }) => {
  return (
    <nav className={className}>
      <Link to="/" className="font-medium text-white hover:text-blue-400 mx-4 border border-white rounded-full px-4 py-2" >Home</Link>
      <Link to="/about" className="font-medium text-white hover:text-blue-400 mx-4 border border-white rounded-full px-4 py-2" >About</Link>
      <Link to="/contacts" className="font-medium text-white hover:text-blue-400 mx-4 border border-white rounded-full px-4 py-2">Contacts</Link>
    </nav>
  );
};

export default Menu;

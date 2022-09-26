import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidebar">
      <nav>
        <h1>To Do App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
import { Link } from 'react-router-dom';
// navbar Components
const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

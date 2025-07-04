import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="d-flex">
      <Link to="/client/src/pages/Home">Home</Link>
      <Link to="/client/src/pages/About">About</Link>
      <Link to="/client/src/pages/Projects">Project</Link>
      <Link to="/client/src/pages/Contact">Contact</Link>
    </nav>
  );
}


export default Nav;

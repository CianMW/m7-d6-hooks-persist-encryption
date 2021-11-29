import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import clipart from "../imageAssets/clipart329592.png";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar-scroll" >
     
      <Link to="/">
        <img src={clipart} height="50px" width="50px" />
      </Link>
      <Link className="remove-deco" to="/">
      <Nav className="ml-4 mr-auto link-highlight remove-deco">
        <span>Home</span>
      </Nav>
      </Link>
      <Link className="remove-deco " to="/favourites">
      <Nav className="ml-4 mr-auto link-highlight remove-deco">
        <span>Favourites</span>
      </Nav>
      </Link>
    </Navbar>
  );
};

export default MyNavbar;

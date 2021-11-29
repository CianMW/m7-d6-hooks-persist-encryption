import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import clipart from "../imageAssets/clipart329592.png";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar-scroll d-flex justify-content "  >
     <div className="d-flex ml-1 p-1 justify-content-between align-items-center">
      <Link to="/">
        <img src={clipart} height="50px" width="50px" style={{ filter: "brightness(1.4)"}} />
      </Link>
      <Link className="remove-deco" to="/">
      <div className="ml-4 mr-2 mr-auto link-highlight remove-deco">
        <div>
        <span>Home</span>
        </div>
      </div>
      </Link>
      <Link className="remove-deco " to="/favourites">
      <div className="ml-4 mr-2 link-highlight remove-deco">
        <div> <span>Favourites</span></div>
       
      </div>
      </Link>
      </div>
    </Navbar>
  );
};

export default MyNavbar;

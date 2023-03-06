import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeftSide from "../LeftSide/LeftSide";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";


const Header = () => {
  const {user, userSingOut} = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'>News Portal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <div className="d-lg-none">
          <LeftSide></LeftSide>
          </div>
          <Nav>
         
            <Nav.Link >
            {user?.uid ? <img style={{width:'40px', height: '40px', borderRadius: '50px'}} src={user.photoURL}/> : <FaUserCircle></FaUserCircle>}
            </Nav.Link>
            <Nav.Link eventKey={2}>
              {user?.displayName}
            </Nav.Link>

            {
              user?.uid ? <Button onClick={userSingOut}>SingOut</Button> : <div>
              <Link to='/singin' className="me-2 btn btn-info">SingIn</Link>
              <Link to='/singup' className="btn btn-primary">SingUp</Link>
              </div>
            }

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import './Navs.css';
import { Nav, Navbar, Container} from "react-bootstrap";
import logo from './../../assets/logo.png';


const Navs =()=>{
    return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">   
        <img src={logo} alt="logo" title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Explore Foods</Nav.Link>
            <Nav.Link href="#">Reviews</Nav.Link>
            <Nav.Link href="#">F.A.Q</Nav.Link>
          
            <Nav.Link id="lastNav">+999-999-999</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navs;
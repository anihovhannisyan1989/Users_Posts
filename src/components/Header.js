import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand" end>My Brand</NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/users" className="nav-link">Users</NavLink>
          <NavLink to="/posts" className="nav-link">Posts</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
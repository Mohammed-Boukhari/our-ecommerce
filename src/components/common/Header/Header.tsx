import { useAppDispatch, useAppSelector } from "@store/hooks";
import { NavLink } from "react-router-dom";

import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import styles from "./style.module.css";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import { authLogout } from "@store/authentication/authenticationSlice";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg="info">eCom</Badge>
        </h1>
        <HeaderLeftBar />
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={"categories"}>
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to={"about-us"}>
                About
              </Nav.Link>
            </Nav>

            <Nav>
              {!accessToken ? (
                <>
                  <Nav.Link as={NavLink} to={"login"}>
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={"register"}>
                    Register
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={"welcome: " + user?.firstName}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Orders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/"
                    onClick={() => dispatch(authLogout())}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

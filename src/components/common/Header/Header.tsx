import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogout } from "@store/authentication/authenticationSlice";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";

import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";

import { NavLink } from "react-router-dom";
import {
  Badge,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
} from "react-bootstrap";

import styles from "./style.module.css";
import { toggleTheme } from "@store/theme/themeSlice";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  const dispatch = useAppDispatch();

  const { accessToken, user } = useAppSelector((state) => state.auth);
  const theme: boolean = useAppSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <header>
      {/* Header Container */}
      <div className={headerContainer}>
        {/* Header Logo */}
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg="info">eCom</Badge>
        </h1>
        {/*=== Header Logo ===*/}

        <div>
          <Button
            variant="info"
            style={{ color: "rgb(60 60 45)" }}
            onClick={() => dispatch(toggleTheme())}
          >
            {theme ? "dark" : "light"}
          </Button>
        </div>

        {/* FIXME: component Header Left Bar */}
        <HeaderLeftBar />
        {/*=== component Header Left Bar ===*/}
      </div>
      {/*=== Header Container ===*/}

      {/* component Nav Bar bootstrap */}
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        {/* Container */}
        <Container>
          {/* FIXME: chow Nav Bar Toggle 991px */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/*=== chow Nav Bar Toggle 991px ===*/}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* nav link page */}
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
            {/*=== nav link page ===*/}

            {/* nav link page to user access token */}
            <Nav>
              {!accessToken ? (
                // login page and Register page
                <>
                  <Nav.Link as={NavLink} to={"login"}>
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={"register"}>
                    Register
                  </Nav.Link>
                </>
              ) : (
                // Profile and Orders and Logout user
                <>
                  {/* Nav Dropdown bootstrap */}
                  <NavDropdown
                    title={"welcome: " + user?.firstName} // first name to user
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={NavLink} to="profile" end>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="profile/orders" end>
                      Orders
                    </NavDropdown.Item>
                    {/* Divider components */}
                    <NavDropdown.Divider />
                    {/* Divider components */}
                    <NavDropdown.Item
                      as={NavLink}
                      to="/"
                      onClick={() => dispatch(authLogout())} // Logout user
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* Nav Dropdown bootstrap */}
                </>
              )}
            </Nav>
            {/* nav link page to user access token */}
          </Navbar.Collapse>
        </Container>
        {/*=== Container ===*/}
      </Navbar>
      {/*=== component Nav Bar bootstrap ===*/}
    </header>
  );
};

export default Header;

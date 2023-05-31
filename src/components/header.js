import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./../styles/header.scss";

export default function Header() {
  const [username, setUsername] = useState("");
  const [loggedUser, setLoggedUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
      setLoggedUser(true);
    }
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
  };

  return (
    <header>
      <Container fluid>
        <Row>
          <Col md={12} lg={4}></Col>
          <Col md={12} lg={4}>
            <div className="logo">
              <a href="/">LOGO</a>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="user">
              {loggedUser ? (
                <>
                  <FontAwesomeIcon icon="fa-solid fa-face-smile" />
                  <p className="username">
                    Bentornato {username}{" "}
                    <small>
                      (
                      <a href="/login" onClick={logout}>
                        Logout
                      </a>
                      )
                    </small>
                  </p>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                  <p>
                    Ciao! <a href="/login">Accedi</a> o <a>Registrati</a>
                  </p>
                </>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Nav>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Header Styles">
                <NavDropdown.Item as={NavLink} to="/headers">
                  Header Style #1
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Post Features">
                <NavDropdown.Item as={NavLink} to="/posts">
                  Post Feature #1
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/tags">
                #Tag
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/authors">
                Authors
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Features">
                <NavDropdown.Item as={NavLink} to="/features">
                  Feature #1
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    </header>
  );
}

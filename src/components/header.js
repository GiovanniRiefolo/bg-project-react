import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

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

  function logout (){
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('username')
  }

  return (
    <header>
      <Container>
        <Row>
          <Col></Col>
          <Col className="logo">
            <a href="/">LOGO</a>
          </Col>
          <Col className="user">
            <div>
              {loggedUser ? (
                <>
                  <FontAwesomeIcon icon="fa-solid fa-face-smile" />
                  <p className="username">
                    Bentornato {username}{" "}
                    <small>
                      (<a href="/login" onClick={logout()}>Logout</a>)
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
              <Nav.Link as={NavLink} to="/headers">
                Header Styles
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/posts">
                Post Fatures
              </Nav.Link>
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

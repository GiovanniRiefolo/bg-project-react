import { useEffect, useState } from "react";
import Header from "./../components/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Login() {
  // Set variables for error, submitted state, password and username
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  // Generate error message
  const renderErrorMessage = (name) => {
    if (name === errorMessage.name) {
      return <div>{errorMessage.message}</div>;
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(event);

    fetch("http://localhost:3030/users", {
      method: "POST",
      headers: {
        "Content-Type": "applcation/json"
      },
      body: JSON.stringify({username, password})
    })
      .then((response) => response.json())
      .then((data) => {
        if(!localStorage.getItem('token')){
          localStorage.setItem('token', data[0].token)
          localStorage.setItem('refreshToken', data[0].refreshToken)
        } else {
          console.log('utente già loggato')
        }
        window.location = ('/')
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          {renderErrorMessage()}
          <form onSubmit={submitForm}>
            <label htmlFor="username">Nome utente</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={usernameChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={passwordChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </Row>
      </Container>
    </>
  );
}

import Header from "./../components/header";
import PageTitle from "../components/page_title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/contact.scss";

export default function Contact() {
  return (
    <>
      <Header />
      <PageTitle title="Contacts" />

      <form className="contact-form">
        <Container>
          <Row>
            <Col>
              <small>
                Fileds with <strong>*</strong> are mandatory.
              </small>
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="nome">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </Col>
            <Col>
              <label htmlFor="nome">Surname</label>
              <input type="text" id="surname" placeholder="Surname" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="nome">Email *</label>
              <input type="email" id="nome" placeholder="Email" required />
            </Col>
            <Col>
              <label htmlFor="evaluation">
                Do you like the job I've done? *
              </label>
              <select id="evaluation">
                <option value="moltissimo">Absolutely awesome!</option>
                <option value="molto">Well done..</option>
                <option value="normale">
                  I didn't expect worst thant that
                </option>
                <option value="poco">Meh...</option>
                <option value="terribile">We will let you know</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>
              <fieldset>
                <div className="contact-form__checkbox">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">
                    I hereby consent to the processing of the personal data that
                    I have provided and declare that you should delede them ASAP
                    or prepare to be assimilated by Borgs{" "}
                    <FontAwesomeIcon icon="fa-solid fa-cube" />.
                  </label>
                </div>
              </fieldset>
            </Col>
          </Row>
          <Row>
            <button type="submit"><span><span>Submit now</span></span></button>
          </Row>
        </Container>
      </form>
    </>
  );
}

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PageTitle(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="page__title">{props.title}</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

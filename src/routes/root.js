import Header from "./../components/header";
import PostList from "./../components/post_list";
import PopularPosts from "../components/popular_posts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFireFlameCurved,
  faComment,
  faClock,
  faUser,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faFireFlameCurved, faComment, faClock);

export default function Root() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={8}>
          <PostList />
          </Col>
          <Col lg={4}>
            <PopularPosts />
          </Col>
        </Row>
      </Container>

    </>
  );
}

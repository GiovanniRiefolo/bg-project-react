import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import "../styles/popular_posts.scss";
import { CarouselItem } from "react-bootstrap";

export default function PopularPosts() {
  const [popularPosts, setPopuplarPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const _popular = data.items.filter((post) => post.likes > 100);
        setPopuplarPosts(_popular.slice(0, 9));
      })
      .catch((error) => console.log(error));
  }, []);

  const formatDate = (value) => {
    let _date = new Date(value);
    return _date.toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <aside>
        <h2>
          Popular posts<span>.</span>
        </h2>
        <Carousel
          nextIcon={<FontAwesomeIcon icon="fa-solid fa-chevron-right" />}
          prevIcon={<FontAwesomeIcon icon="fa-solid fa-chevron-left" />}
        >
          <CarouselItem>
            <Container>
              {popularPosts.slice(0, 3).map((post) => {
                return (
                  <Row key={post.id}>
                    <Col xs={4}>
                      <figure>
                        <img src={post.image} width="64" alt="" />
                      </figure>
                    </Col>
                    <Col xs={8}>
                      <h3>{post.title}</h3>
                      <div className="carousel__post-info">
                        <FontAwesomeIcon icon="fa-solid fa-clock" />
                        <time>{formatDate(post.date_published)}</time>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </CarouselItem>
          <CarouselItem>
            <Container>
              {popularPosts.slice(3, 6).map((post) => {
                return (
                  <Row key={post.id}>
                    <Col xs={4}>
                      <figure>
                        <img src={post.image} width="64" alt="" />
                      </figure>
                    </Col>
                    <Col xs={8}>
                      <h3>{post.title}</h3>
                      <div className="carousel__post-info">
                        <FontAwesomeIcon icon="fa-solid fa-clock" />
                        <time>{formatDate(post.date_published)}</time>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </CarouselItem>
          <CarouselItem>
            <Container>
              {popularPosts.slice(6, 9).map((post) => {
                return (
                  <Row key={post.id}>
                    <Col xs={4}>
                      <figure>
                        <img src={post.image} width="64" alt="" />
                      </figure>
                    </Col>
                    <Col xs={8}>
                      <h3>{post.title}</h3>
                      <div className="carousel__post-info">
                        <FontAwesomeIcon icon="fa-solid fa-clock" />
                        <time>{formatDate(post.date_published)}</time>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </CarouselItem>
        </Carousel>
      </aside>
    </>
  );
}

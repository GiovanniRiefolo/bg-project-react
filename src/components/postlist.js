import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/postlist.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.items);
      })
      .catch((error) => console.log(error.message));
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
      <Container>
        <Row>
          {posts.map((post) => (
            <Col xs={6}>
              <article key={post.id}>
                <figure>
                  <img src={post.image} />
                  <h3>{post.title}</h3>
                </figure>
                <p>{post.author.name}</p>
                <img src={post.author.avatar} />
                <p>{formatDate(post.date_published)}</p>
                <p>{post.summary}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

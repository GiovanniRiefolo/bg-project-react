import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Counter from "./counter";

import "../styles/postlist.scss";

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
                  <Counter
                    data-like={post.likes}
                    data-comments={post.total_comments}
                    data-time-to-read={post.minutes_to_read}
                  />
                  <img src={post.image} />
                  <h2>{post.title}</h2>
                </figure>
                <div className="author">
                  <a
                    rel="author"
                    href={post.author.url}
                    className="author__avatar"
                  >
                    <figure>
                      <img src={post.author.avatar} alt="" width="40" />
                    </figure>
                    <span>{post.author.name}</span>
                  </a>
                  <time>{formatDate(post.date_published)}</time>
                </div>
                <p>{post.summary}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

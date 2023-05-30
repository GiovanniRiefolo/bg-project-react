import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Counter from "./counter";

import "../styles/post_list.scss";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [noposts, setNoPosts] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3030/posts", {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => {
        setPosts(data.items);
      })
      .catch((error) => {
        setNoPosts(true);
      });
  }, []);

  const formatDate = (value) => {
    let _date = new Date(value);
    return _date.toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (noposts) {
    return (
      <>
        <Container>
          <Row>
            <p>Non ci sono ancora post disponibili!</p>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container className="post-list">
        <Row>
          {posts.map((post) => (
            <Col xs={12} lg={6} key={post.id}>
              <article>
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

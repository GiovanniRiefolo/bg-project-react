import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Counter from "./counter";
import loadingSvg from "../images/loading.svg";

import "../styles/post_list.scss";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [noposts, setNoPosts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: create a temp variable to get the current max index of posts
  // then use it to slice the posts (prevIndex, nextIndex). Then concatenate
  // the array (or push) to the current posts array.

  const [currentPosts, setCurrentPosts] = useState(6);

  useEffect(() => {
    fetchPosts(0, currentPosts);

    let observer = new IntersectionObserver(loadMorePosts, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    
    observer.observe(document.querySelector("#postListEnd"));

  }, []);

  const fetchPosts = (start, end) => {
    setIsLoading(true);
    const randomTime = Math.floor(Math.random() * 2000) + 1000;

    fetch("http://localhost:3030/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setPosts(data.items.slice(start, end));
          setIsLoading(false);
        }, randomTime);
      })
      .catch((error) => {
        setNoPosts(true);
      });
  };

  const loadMorePosts = (entries) => {
    
    let tempIndex
    if(entries[0].isIntersecting && currentPosts < posts.length){
      tempIndex = currentPosts
      setCurrentPosts(currentPosts + 6)
    }
    fetchPosts(tempIndex, currentPosts)
  };

  const formatDate = (value) => {
    let _date = new Date(value);
    return _date.toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <>
        <img src={loadingSvg} alt="" width="32" />
        <p>Caricamento post...</p>
      </>
    );
  }

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
                  <img src={post.image} alt="" width="410" loading="lazy" />
                  <h2>{post.title}</h2>
                </figure>
                <div className="author">
                  <a
                    rel="author"
                    href={post.author.url}
                    className="author__avatar"
                  >
                    <figure>
                      <img
                        src={post.author.avatar}
                        alt=""
                        width="40"
                        loading="lazy"
                      />
                    </figure>
                    <span>{post.author.name}</span>
                  </a>
                  <time>{formatDate(post.date_published)}</time>
                </div>
                <p>{post.summary}</p>
              </article>
            </Col>
          ))}
          <div id="postListEnd"></div>
        </Row>
      </Container>
    </>
  );
}

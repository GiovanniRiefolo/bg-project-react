import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Counter from "./counter";
import loadingSvg from "../images/loading.svg";

import "../styles/post_list.scss";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    fetchPosts(0, currentPosts);
    console.log("i fire once");
  }, [currentPosts]);

  // observing user position to load more content
  const observerTarget = useRef(null);
  let currentPosts = 6;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let tempIndex = 0;
          if (currentPosts < totalRecords) {
            tempIndex = currentPosts;
            currentPosts += 6;
          }
          console.log("tempIndex " + tempIndex, "currentPosts " + currentPosts);
          fetchPosts(tempIndex, currentPosts);
        }
      },
      {
        threshold: 1.0,
      }
    );
    console.log("observing...");

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget.current]);

  // fetch posts
  const fetchPosts = async (start, end) => {
    setIsLoading(true);
    // randomize latency in server response from 1s to 2s
    const randomTime = Math.floor(Math.random() * 2000) + 1000;
    fetch("http://localhost:3030/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (posts.length === 0) {
            setPosts(data.items.slice(start, end));
            setTotalRecords(data.total_records);
          } else if(posts.length <= totalRecords) {
            setPosts(prevPosts => prevPosts.concat(data.items.slice(start, end)));
          } else {
            return
          }
          setIsLoading(false);
        }, randomTime);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  const formatDate = (value) => {
    let _date = new Date(value);
    if (!_date){
        return
    }
    return _date.toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (errorMessage) {
    return (
      <>
        <Container>
          <Row>
            <p>{errorMessage}</p>
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
          <p ref={observerTarget} style={{textAlign: 'center'}}>Thanks to read us!</p>
        </Row>
      </Container>
      {isLoading ? (
        <Container>
          <Row>
            <Col>
              <div className="post-list__loader">
                <img src={loadingSvg} alt="" width="32" />
                <p>Loading posts...</p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/counter.scss";

export default function Counter(props) {
  const like = props["data-like"];
  const comments = props["data-comments"];
  const timeToRead = props["data-time-to-read"];

  return (
    <>
      <div className="counter">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-comment" />
          {comments}
        </div>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-fire-flame-curved" />
          {like}
        </div>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-clock" />
          {timeToRead}
        </div>
      </div>
    </>
  );
}

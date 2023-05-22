import Header from "./../components/header";
import PostList from "./../components/postlist";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFireFlameCurved,
  faComment,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faFireFlameCurved, faComment, faClock);

export default function Root() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

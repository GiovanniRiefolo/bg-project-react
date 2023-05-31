import Header from "./../components/header";
import PostList from "./../components/post_list";
import PageTitle from "../components/page_title";

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

export default function Authors() {
  return (
    <>
      <Header />
      <PageTitle title="Posts" />
      <PostList />
    </>
  );
}

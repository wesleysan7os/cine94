import "./singlePost.css";
import SideBar from '../../components/sideBar/SideBard';
import PostDetails from "../../components/postDetails/PostDetails";

export default function SinglePost() {
  return (
    <div class="singlePost">
      <SideBar />
      <PostDetails />
    </div>
  );
}
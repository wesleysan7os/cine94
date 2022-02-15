import "./singlePost.css";
import SideBar from '../../components/SideBar';
import PostDetails from "../../components/PostDetails";

export default function SinglePost() {
  return (
    <div class="singlePost">
      <SideBar />
      <PostDetails />
    </div>
  );
}
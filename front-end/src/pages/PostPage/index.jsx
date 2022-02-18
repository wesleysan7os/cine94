import SideBar from '../../components/SideBar';
import PostDetails from "../../components/PostDetails";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <SideBar />
      <PostDetails />
    </div>
  );
}
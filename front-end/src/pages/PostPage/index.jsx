import "./postDetails.css";
import SideBar from '../../components/SideBar';
import PostDetails from "../../components/PostDetails";

export default function PostPage() {
  return (
    <div className="singlePost">
      <SideBar />
      <PostDetails />
    </div>
  );
}
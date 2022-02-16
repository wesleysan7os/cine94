import SideBar from '../../components/SideBar';
import PostDetails from "../../components/PostDetails";
import "./postPage.css";

export default function PostPage() {
  return (
    <div className="singlePost">
      <SideBar />
      <PostDetails />
    </div>
  );
}
import "./postDetails.css";
import SideBar from '../../components/SideBar';
import PostThumbnail from "../../components/PostThumbnail";

export default function PostDetails() {
  return (
    <div className="singlePost">
      <SideBar />
      <PostThumbnail />
    </div>
  );
}
import "./post.css";
import postImage from "../../assets/images/pulpfiction.jpg";
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={postImage} alt="post image" />
      <div className="postInfo">
        <span className="postAuthor">Author: Wesley Santos</span>
        <span className="postTitle">Pulp Fiction vale a pena?</span>
        <hr />
        <div className="postDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed quisquam
          voluptas culpa quos, autem illum sequi veniam quia tenetur incidunt? Quos obcaeca
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed quisquam
          voluptas culpa quos, autem illum sequi veniam quia tenetur incidunt? Quos obcaeca
        </div>
      </div>
    </div>
  );
}; 
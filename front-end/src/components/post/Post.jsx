import "./post.css";
import postImage from "../../assets/images/pulpfiction.jpg";
export default function Post(props) {
  return (
    <div className="post">
      <img className="postImg" src={postImage} alt="post image" />
      <div className="postInfo">
        <span className="postAuthor">Author: {props.author}</span>
        <span className="postTitle">{props.title}</span>
        <hr />
        <div className="postDescription">{props.description}</div>
      </div>
    </div>
  );
}; 
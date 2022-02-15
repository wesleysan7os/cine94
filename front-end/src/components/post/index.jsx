import "./post.css";
import postImage from "../../assets/images/pulpfiction.jpg";
import Star from "../Star";

export default function Post({ postData }) {
  return (
    <article className="post">
      <img className="postImg" src={postImage} alt="post" />
      <div className="postInfo">
        <span className="postAuthor">Author: {postData.author}</span>
        <Star rating={postData.rating} />
      </div>
      <div className="postPreview">
        <span className="postTitle">{postData.title}</span>
        <hr />
        <div className="postDescription">{postData.text}</div>
      </div>
    </article>
  );
}; 
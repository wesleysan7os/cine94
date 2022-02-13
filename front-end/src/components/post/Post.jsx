import "./post.css";
import postImage from "../../assets/images/pulpfiction.jpg";
export default function Post({title, author, text}) {
  return (
    <article className="post">
      <img className="postImg" src={postImage} alt="post image" />
      <div className="postInfo">
        <span className="postAuthor">Author: {author}</span>
        <span className="postTitle">{title}</span>
        <hr />
        <div className="postDescription">{text}</div>
      </div>
    </article>
  );
}; 
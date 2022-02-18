import "./postThumbnail.css";
import postImage from "../../assets/images/pulpfiction.jpg";
import Star from "../Star";

export default function PostThumbnail({ postData, onNavigate }) {
  function handleClick() {
    onNavigate(postData.id);
  } 
  
  return (
    <article className="post">
      <img className="postImg" src={postImage} alt="post" onClick={handleClick}/>
      <div className="postInfo">
        <span className="postAuthor">Author: {postData.author}</span>
        <Star rating={postData.rating} />
      </div>
      <div className="postPreview" onClick={handleClick}>
        <span className="postTitle">{postData.title}</span>
        <hr />
        <div className="postDescription" onClick={handleClick}>{postData.text}</div>
      </div>
    </article>
  );
}; 
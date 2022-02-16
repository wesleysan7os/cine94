import "./postThumbnail.css";
import postImage from "../../assets/images/pulpfiction.jpg";
import Star from "../Star";

export default function PostThumbnail({ postData, navigate }) {
  function handleNavigate() {
    navigate(postData.id);
  } 
  
  return (
    <article className="post">
      <img className="postImg" src={postImage} alt="post" onClick={handleNavigate}/>
      <div className="postInfo">
        <span className="postAuthor">Author: {postData.author}</span>
        <Star rating={postData.rating} />
      </div>
      <div className="postPreview" onClick={handleNavigate}>
        <span className="postTitle">{postData.title}</span>
        <hr />
        <div className="postDescription">{postData.text} onClick={handleNavigate}</div>
      </div>
    </article>
  );
}; 
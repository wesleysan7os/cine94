import "./postDetails.css";
import postImage from "../../assets/images/pulpfiction.jpg";
export default function PostDetails() {
  return (
    <div class="postDetails">
      <div className="postDetailsWrapper">
        <img className="postDetailsImg" src={postImage} alt="post image" />
        <h1 className="postDetailsTitle">
          Pulp Fiction vale a pena?
          <div className="postDetailsEdit">
            <i className="postDetailsIcon fas fa-edit"></i>
            <i className="postDetailsIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="postDetailsInfo">
          <span className="postDetailsAuthor">Author: <b>Wesley Santos</b></span>
        </div>
        <p className="postDetailsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus eligendi iusto
          asperiores voluptate perspiciatis. Magnam similique quasi mollitia doloribus corporis
          quibusdam impedit earum ipsa ab numquam dolorem, beatae sint!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore ducimus eligendi iustoasperiores voluptate perspicia
          tis. Magnam similique quasi mollitia doloribus corporisquibusdam impedit earum ipsa ab 
          numquam dolorem, beatae sint!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolore ducimus eligendi iusto asperiores voluptate perspiciatis. Magnam similique quasi
          mollitia doloribus corporis quibusdam impedit earum ipsa ab numquam dolorem, beatae sint!
          Dolore ducimus eligendi iusto asperiores voluptate perspiciatis. Magnam similique quasi
          mollitia doloribus corporis quibusdam impedit earum ipsa ab numquam dolorem, beatae sint!
        </p>
      </div>
    </div>
  );
}
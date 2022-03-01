import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api";
import postImage from "../../assets/images/pulpfiction.jpg";
import Star from "../Star";
import "./postDetails.css";

export default function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  function getPost() {
    api
      .get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";
        toast.error(msg);
      });
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="postDetails">
      <div className="wrapper">
        <img className="img" src={postImage} alt="post" />
        <h1 className="title">
          Pulp Fiction vale a pena?
          <div className="edit">
            <i className="icon fas fa-edit"></i>
            <i className="icon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="info">
          <span className="author">Author: <b>Wesley Santos</b></span>
        </div>
        <Star rating={2.7} />
        <p className="description">
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
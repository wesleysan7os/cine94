import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PostThumbnail from "../PostThumbnail";
import api from "../../api";
import "./postsList.css";

export default function Posts() {
  const [postsList, setPostsList] = useState("");
  const navigate = useNavigate();

  function getPostsList() {
    api
      .get(`/posts`)
      .then((response) => {
        setPostsList(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";
        toast.error(msg);
      });
  }

  function handleNavigate(id) {
    navigate(`/posts/${id}`);
  } 

  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <div className="posts">
      { postsList && 
        postsList.map(post => {
          return <PostThumbnail postData={post} key={post.id} onNavigate={handleNavigate} />
        })
      }
    </div>
  );
}
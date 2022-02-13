import { useState, useEffect } from "react";
import api from "../../api";
import Post from "../post/Post";
import { toast } from "react-toastify";
import "./postsList.css";

export default function Posts() {
  const [postsList, setPostsList] = useState("");

  function getPostsList() {
    api
      .get(`/blogs`)
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

  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <div className="posts">
      { postsList && 
        postsList.map(post => <Post postData={post} key={post.id} />)
      }
    </div>
  );
}
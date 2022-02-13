import { useState } from "react";
import Post from "../post/Post";
import "./postsList.css";

export default function Posts() {
  const [img, setImg] = useState("../../assets/images/pulpfiction.jpg");
  const [author, setAuthor] = useState("Wesley Santos");
  const [title, setTitle] = useState("Pulp Fiction vale a pena?");
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed quisquam voluptas culpa quos, autem illum sequi veniam quia tenetur incidunt? Quos obcaeca Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed quisquam voluptas culpa quos, autem illum sequi veniam quia tenetur incidunt? Quos obcaeca");

  return (
    <div className="posts">
      <Post img={img} author={author} title={title} description={description}/>
      <Post img={img} author={author} title={title} description={description}/>
      <Post img={img} author={author} title={title} description={description}/>
      <Post img={img} author={author} title={title} description={description}/>
      <Post img={img} author={author} title={title} description={description}/>
      <Post img={img} author={author} title={title} description={description}/>
    </div>
  );
}
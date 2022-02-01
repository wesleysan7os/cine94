import Header from "../../components/header/Header";
import PostsList from "../../components/posts/PostsList";
import SideBar from "../../components/sideBar/SideBard";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <SideBar />
        <PostsList />
      </div>
    </>
  );
}
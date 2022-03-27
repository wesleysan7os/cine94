import Header from "../../components/Header";
import PostsList from "../../components/PostsList";
import SideBar from "../../components/SideBar";
import "./home.css";

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
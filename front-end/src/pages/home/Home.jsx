import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sideBar/SideBard";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <SideBar />
        <Posts />
      </div>
    </>
  );
}
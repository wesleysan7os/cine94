import "./Header.css"; 
import headerImg from "../../assets/images/w.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Cine94</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src={headerImg}
        alt=""
      />
    </div>
  );
} 
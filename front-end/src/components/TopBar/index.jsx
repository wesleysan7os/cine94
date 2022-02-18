import profilePicture from "../../assets/images/profile-picture.jpeg";
import { Link } from "react-router-dom";
import "./topBar.css";

export default function TopBar() {
  return (
    <nav className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link to="/" style={{ textDecoration: "none", color: "inherit"}}>Home</Link></li> 
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem"><Link to="/create" style={{ textDecoration: "none", color: "inherit"}}>Write</Link></li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src={profilePicture}
          alt="Profile"
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
}

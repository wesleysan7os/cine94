import "./sideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://avatars.githubusercontent.com/wesleysan7os"
          alt="MyProfile Picture"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          vulputate mauris sed elementum tincidunt. Nam non est mauris. Aliquam
          dapibus leo nec pharetra posuere. Morbi fringilla at risus vitae
          posuere.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Genres</li>
          <li className="sidebarListItem">Decades</li>
          <li className="sidebarListItem">Awards</li>
          <li className="sidebarListItem">Nacionality</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
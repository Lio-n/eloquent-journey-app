import Nav from "@/ui/Nav";
import ArticleIcon from "@/ui/icons/articleIcon";
import HomeIcon from "@/ui/icons/homeIcon";
import LogoutIcon from "@/ui/icons/logoutIcon";
import UserIcon from "@/ui/icons/userIcon";
import WrenchIcon from "@/ui/icons/wrenchIcon";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <>
      <Nav>
        <li>
          <Link to={"/"} data-tooltip="Home Page">
            <HomeIcon />
          </Link>
        </li>
        <li className="delimiter"></li>
        <li>
          <Link to={`/dashboard`} data-tooltip="My Profile">
            <UserIcon />
          </Link>
        </li>
        <li>
          <Link to={`/dashboard/articles`} data-tooltip="My Articles">
            <ArticleIcon />
          </Link>
        </li>
        <li>
          <Link to={`/dashboard/settings`} data-tooltip="My Settings">
            <WrenchIcon />
          </Link>
        </li>
        <li>
          <div role="link" style={{ cursor: "pointer", border: "none" }} data-tooltip="Logout">
            <LogoutIcon />
          </div>
        </li>
      </Nav>
    </>
  );
};

export default DashboardMenu;

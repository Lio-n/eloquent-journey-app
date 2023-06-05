import { updateUser } from "@/lib/redux/states/user";
import Nav from "@/ui/Nav";
import ArticleIcon from "@/ui/icons/articleIcon";
import HomeIcon from "@/ui/icons/homeIcon";
import LogoutIcon from "@/ui/icons/logoutIcon";
import UserIcon from "@/ui/icons/userIcon";
import WrenchIcon from "@/ui/icons/wrenchIcon";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  const dispatch = useDispatch();

  const cleanUserFromLocalStorage = () => dispatch(updateUser({ id: 2 }));

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
          <Link to={`/dashboard/articles/list`} data-tooltip="My Articles">
            <ArticleIcon />
          </Link>
        </li>
        <li>
          <Link to={`/dashboard/settings`} data-tooltip="My Settings">
            <WrenchIcon />
          </Link>
        </li>
        <li>
          <Link to={`/`} data-tooltip="Logout" onClick={cleanUserFromLocalStorage}>
            <LogoutIcon />
          </Link>
        </li>
      </Nav>
    </>
  );
};

export default DashboardMenu;

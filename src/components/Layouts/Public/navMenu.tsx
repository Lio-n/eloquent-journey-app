import { PublicPaths } from "@/routes/path.routes";
import Nav from "@/ui/Nav";
import HomeIcon from "@/ui/icons/homeIcon";
import LoginIcon from "@/ui/icons/loginIcon";
import UserIcon from "@/ui/icons/userIcon";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to={PublicPaths.HOME} data-tooltip="Home">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link to={PublicPaths.PROFILE} data-tooltip="Profile">
              <UserIcon />
            </Link>
          </li>
          <li>
            <Link to={PublicPaths.LOGIN} data-tooltip="Login">
              <LoginIcon />
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default NavMenu;

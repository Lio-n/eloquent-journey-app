import { AppStore } from "@/lib/redux/store";
import { PublicPaths } from "@/routes/path.routes";
import Nav from "@/ui/Nav";
import BoardIcon from "@/ui/icons/boardIcon";
import HomeIcon from "@/ui/icons/homeIcon";
import LoginIcon from "@/ui/icons/loginIcon";
import UserIcon from "@/ui/icons/userIcon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return (
    <>
      <Nav>
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
        {userState.id && (
          <>
            <li className="delimiter"></li>

            <li>
              <Link to="/dashboard" data-tooltip="Dashboard">
                <BoardIcon />
              </Link>
            </li>
          </>
        )}
      </Nav>
    </>
  );
};

export default NavMenu;

import { PublicPaths } from "@/routes/path.routes";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <article style={{ marginTop: "0", padding: "0" }}>
      <header style={{ margin: "0", padding: "1rem" }}>
        <nav className="container-fluid">
          <ul>
            <li>
              <Link className="contrast" to={PublicPaths.HOME}>
                Home
              </Link>
            </li>
            <li>
              <Link className="contrast" to={PublicPaths.PROFILE}>
                Profile
              </Link>
            </li>
            <li>
              <Link className="contrast" to={PublicPaths.ARTICLE(12)}>
                Ver Articulo 12
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link className="contrast" to={PublicPaths.LOGIN}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </article>
  );
};

export default Header;

import { Outlet } from "react-router-dom";
import DashboardMenu from "./dashboardMenu";
import styled from "styled-components";

const Main = styled.main`
  #container {
    margin: 2rem auto 7rem;
    max-width: 40rem;

    h3 {
      border-bottom: solid var(--muted-color);
    }
  }

  @media (min-width: 840px) {
    margin-left: 5rem;
  }
`;

const PrivateLayout = () => {
  return (
    <Main>
      <DashboardMenu />
      <article id="container">
        <Outlet />
      </article>
    </Main>
  );
};

export default PrivateLayout;

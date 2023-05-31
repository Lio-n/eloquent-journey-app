import { Outlet } from "react-router-dom";
import DashboardMenu from "./dashboardMenu";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;

  h1 {
    border-bottom: solid var(--muted-color);
  }
`;

const PrivateLayout = () => {
  return (
    <main>
      <DashboardMenu />
      <Container className="container">
        <Outlet />
      </Container>
    </main>
  );
};

export default PrivateLayout;

import styled from "styled-components";

const Main = styled.main`
  place-content: center;

  #container_private,
  #container_public {
    margin: auto;
    display: grid;
    place-items: center;
    max-width: 40rem;
  }

  #container_private {
    h3 {
      border-bottom: solid var(--muted-color);
    }
  }

  #container_public {
    height: 100vh;
  }

  @media (min-width: 840px) {
    margin-left: 5rem;
  }
`;

export default Main;

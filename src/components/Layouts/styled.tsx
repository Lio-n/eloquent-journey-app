import styled from "styled-components";

const Main = styled.main`
  place-content: center;

  #container_private,
  #container_public {
    margin: auto;
  }

  #container_private {
    max-width: 40rem;
    display: grid;
    place-items: center;

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

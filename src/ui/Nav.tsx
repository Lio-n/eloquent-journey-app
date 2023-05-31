import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  z-index: 5;
  bottom: 0;

  display: flex;
  width: 100vw;

  background-color: var(--code-background-color);

  ul {
    width: 100%;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export default Nav;

import { useEffect } from "react";
import styled from "styled-components";

const Root = styled.nav`
  position: fixed;
  z-index: 1;
  bottom: 0;

  width: 100vw;
  background-color: var(--code-background-color);

  #menu_list {
    width: 100%;
    justify-content: center;
    gap: 1.5rem;
  }

  .delimiter {
    border: 1px solid var(--primary);
    padding: 0;
  }

  @media (min-width: 840px) {
    left: 0;
    height: 100vh;
    width: 5rem;
    place-content: center;

    #menu_list {
      flex-direction: column;

      .delimiter {
        width: 40%;
        height: 0;
      }
    }
  }
`;

const Nav = ({ children }: { children: any }) => {
  const mediaQuery = window.matchMedia("(min-width: 840px)");

  const handleMediaQueryChange = (mediaQuery: any) => {
    const menuList = document.getElementById("menu_list");
    const links = menuList?.querySelectorAll("[data-tooltip]");

    if (mediaQuery.matches) {
      links?.forEach((link) => link.setAttribute("data-placement", "right"));
    } else {
      links?.forEach((link) => link.setAttribute("data-placement", "top"));
    }
  };

  useEffect(() => {
    handleMediaQueryChange(mediaQuery);
  }, []);

  // Agregamos un listener utilizando addEventListener
  mediaQuery.addEventListener("change", handleMediaQueryChange);

  return (
    <>
      <Root>
        <ul id="menu_list">{children}</ul>
      </Root>
    </>
  );
};

export default Nav;

import { useEffect } from "react";
import styled from "styled-components";

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 4px;
  z-index: 99;
  background-color: var(--primary);
  transition: width 1s;

  @media (min-width: 840px) {
    margin-left: 5rem;
  }
`;

const ProgressBar = () => {
  useEffect(() => {
    const progressBar = document.getElementById("progress-bar") as HTMLDivElement;

    const setProgressBar = () => {
      let scrollDist = document.documentElement.scrollTop || document.body.scrollTop;
      let progressWidth = (scrollDist / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
      progressBar.style.width = progressWidth + "%";
    };

    if (progressBar) window.addEventListener("scroll", setProgressBar);
  }, []);

  return <Root id="progress-bar"></Root>;
};

export default ProgressBar;

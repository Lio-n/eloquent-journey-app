import { CSSProperties } from "react";

const SunIcon = ({ style, className, onClick }: { style?: CSSProperties; className?: string; onClick?: () => any }) => (
  <svg
    onClick={onClick}
    style={{ ...style, width: "1.5rem" }}
    className={className}
    id="sunIcon"
    data-icon="sun"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512">
    <g>
      <path
        fill="currentColor"
        d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"></path>
      <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"></path>
    </g>
  </svg>
);

export default SunIcon;

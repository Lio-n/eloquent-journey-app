import { CSSProperties } from "react";

const ArrowRightIcon = ({ styles, className, onClick }: { styles?: CSSProperties; className?: string; onClick: () => any }) => (
  <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" style={{ ...styles, width: "1.5rem" }} className={className} viewBox="0 0 512 512">
    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
  </svg>
);

const ArrowLeftIcon = ({ styles, className, onClick }: { styles?: CSSProperties; className?: string; onClick: () => any }) => (
  <ArrowRightIcon styles={{ ...styles, transform: "scaleX(-1)" }} className={className} onClick={onClick} />
);

export { ArrowRightIcon, ArrowLeftIcon };

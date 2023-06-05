import styled from "styled-components";

const Root = styled.figure`
  display: flex;
  flex-wrap: wrap;

  .color_box {
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }

    &.picked {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
      background-position: center;
      background-size: 0.66rem auto;
      background-repeat: no-repeat;
      box-shadow: inset 0 0 1rem 0 rgba(0, 0, 0, 0.25);
      opacity: 1;
    }
  }
`;

const ListAvailableColors = ({ colors, pickedColor }: { colors: { name: string; value: string }[]; pickedColor: string }) => (
  <Root>
    {colors.map((color, index) => (
      <div
        key={index}
        className={`color_box ${pickedColor === color.name && "picked"}`}
        data-color={color.name}
        aria-label={`Activate ${color.name} theme`}
        style={{ backgroundColor: `${color.value}` }}
        onClick={(e: any) => {
          document.querySelector(".picked")?.classList.remove("picked");
          e.target.classList.add("picked");
        }}
      />
    ))}
  </Root>
);

export default ListAvailableColors;

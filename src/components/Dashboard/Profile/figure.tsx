import { avatarAssets } from "@/Mock/user.mock.";
import PenIcon from "@/ui/icons/penIcon";
import styled from "styled-components";

const Root = styled.div`
  width: fit-content;
  margin: 0 auto;
  position: relative;

  img {
    cursor: pointer;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    padding: 0.2rem;
    border: solid 0.2rem;
  }

  .avatar_selected {
    position: relative;
    display: grid;
    place-items: center;

    .penIcon {
      position: absolute;
      cursor: pointer;
    }

    img {
      border-color: var(--accordion-active-summary-color);
    }
  }

  .card_avatars {
    display: none;
    width: max-content;

    position: absolute;
    background-color: var(--table-border-color);
    padding: 1rem;
    gap: 0.5rem;
    border-radius: var(--border-radius);
    left: -185%;
  }

  &:hover,
  &:active {
    .card_avatars {
      display: flex;

      img:hover {
        border-color: var(--accordion-active-summary-color);
      }
    }
  }
`;

const Figure = ({ avatar, onChange }: { avatar: { url: string; name: string }; onChange: (e: { url: string; name: string }) => any }) => {
  return (
    <Root>
      <div className="avatar_selected">
        <PenIcon className="penIcon" />
        <img src={avatar.url} alt={avatar.name} />
      </div>
      <div className="card_avatars">
        <img src={avatarAssets.avatar_1} alt={"avatar"} onClick={() => onChange({ url: avatarAssets.avatar_1, name: "avatar" })} />
        <img src={avatarAssets.avatar_2} alt={"avatar"} onClick={() => onChange({ url: avatarAssets.avatar_2, name: "avatar" })} />
        <img src={avatarAssets.avatar_3} alt={"avatar"} onClick={() => onChange({ url: avatarAssets.avatar_3, name: "avatar" })} />
        <img src={avatarAssets.avatar_4} alt={"avatar"} onClick={() => onChange({ url: avatarAssets.avatar_4, name: "avatar" })} />
      </div>
    </Root>
  );
};

export default Figure;

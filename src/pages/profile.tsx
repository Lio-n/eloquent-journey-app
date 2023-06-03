import { AppStore } from "@/lib/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import mockUserData from "@/Mock/user.mock.";
import UserInfo from "@/models/user.model";
import styled from "styled-components";
import delay from "@/utilities/delay.utility";

const Root = styled.article`
  .figure_avatar {
    margin: 0 auto var(--typography-spacing-vertical);

    .avatar {
      border-radius: 50%;
      width: 8rem;
      height: 8rem;
      padding: 0.3rem;
      border: solid 0.1rem;
    }
  }

  .user_info {
    display: grid;

    .fullname {
      font-size: 1.2rem;
    }
    .email {
      border-bottom: none;
      width: fit-content;
      cursor: pointer;
      justify-self: end;
      margin-bottom: 0;
    }
  }

  .user_content {
    display: grid;

    @media (min-width: 992px) {
      display: flex;
      gap: 2rem;

      .avatar {
        width: 15rem;
      }
    }
  }
`;

const Profile = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    !userState.id ? setUser(mockUserData) : setUser(userState);
  }, []);

  const handleCopyText = (e: any) => {
    navigator.clipboard.writeText(user?.email || "");
    const target = e.target;
    target.setAttribute("data-tooltip", "Copied");

    delay(() => target.setAttribute("data-tooltip", "Copy email!"), 1000);
  };

  return (
    <Root>
      <h3 style={{ marginBottom: "1.5rem" }}>Profile</h3>
      <div className="user_content">
        <figure className="figure_avatar">
          <img className="avatar" src={user?.avatar.url} alt={user?.avatar.name} />
        </figure>
        <div className="user_info">
          <p>
            <strong className="fullname">{user?.fullname}</strong>
          </p>
          <p>{user?.aboutMe}</p>

          <u style={{ justifySelf: "end" }}>
            <p onClick={handleCopyText} data-tooltip="Copy email!" className="email">
              {user?.email}
            </p>
          </u>
        </div>
      </div>
    </Root>
  );
};

export default Profile;

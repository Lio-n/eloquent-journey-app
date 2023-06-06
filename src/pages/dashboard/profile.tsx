import { lazy } from "react";
import styled from "styled-components";

const LazyFormProfile = lazy(() => import("@/components/Dashboard/Profile/formProfile"));

const Article = styled.article`
  @media (max-width: 992px) {
    margin-bottom: 7rem;
  }
`;

const MyProfile = () => {
  return (
    <Article>
      <h3>My profile</h3>

      <LazyFormProfile />
    </Article>
  );
};

export default MyProfile;

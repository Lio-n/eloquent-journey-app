import FormProfile from "@/components/Dashboard/Profile/formProfile";
import styled from "styled-components";

const Article = styled.article`
  @media (max-width: 992px) {
    margin-bottom: 7rem;
  }
`;

const MyProfile = () => {
  return (
    <Article>
      <h3>My profile</h3>

      <FormProfile />
    </Article>
  );
};

export default MyProfile;

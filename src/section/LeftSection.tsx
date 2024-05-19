import styled from "styled-components";
import EnsimTitle from "../components/commun/EnsimTitle";

const LeftSection = () => {
  return (
    <MainStyled>
      <EnsimTitle />
    </MainStyled>
  );
};

export default LeftSection;

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  width: 25%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
`;

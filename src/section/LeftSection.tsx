import styled from "styled-components";

const LeftSection = () => {
  return (
    <MainStyled>
      <h1>Filtres</h1>
    </MainStyled>
  );
};

export default LeftSection;

const MainStyled = styled.div`
  display: flex;
  background-color: white;
  width: 25%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
`;

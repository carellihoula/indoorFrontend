import styled from "styled-components";
import SearchBar from "../components/SearchBar";

export const RightSection = () => {
  return (
    <MainStyled className="">
      <SearchBar />
    </MainStyled>
  );
};

export default RightSection;

const MainStyled = styled.div`
  display: flex;
  position: relative;
  background-color: #eaeaea;
  width: 75%;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
`;

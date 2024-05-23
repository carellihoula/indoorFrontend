import styled from "styled-components";
import EnsimTitle from "../components/commun/EnsimTitle";
import MultipleSelectPlaceholder from "../components/SelectFromList/SelectCategorie";

const LeftSection = () => {
  return (
    <MainStyled>
      <EnsimTitle />

      <div className="mt-20">
        <h1 className="font-bold mb-2 text-xl">Filtres</h1>
        <MultipleSelectPlaceholder />
      </div>
    </MainStyled>
  );
};

export default LeftSection;

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-y: auto;
  padding: 10px;
  width: 25%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
`;

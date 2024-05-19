import styled from "styled-components";
import SearchBar from "../components/SearchBar";

//import plan from "../assets/planEnsim/svg/plan.svg";
import { useState } from "react";
import ZoomInOut from "../components/commun/ZoomInOut";

export const RightSection = () => {
  const [angle, setAngle] = useState(0);

  const rotate = () => {
    setAngle((prevAngle) => prevAngle + 90); // Rotate image by 90 degrees
  };
  return (
    <MainStyled className="">
      <SearchBar />
      <ZoomInOut />
      {/*<div className="image__div">
        <img
          src={plan}
          width={500}
          height={500}
          alt="plan ensim"
          style={{ transform: `rotate(${angle}deg)`, position: "absolute" }}
        />
      </div>*/}

      {/*<button onClick={rotate}>Rotate Image</button>*/}
      {/*<svg onClick={() => alert("salut")}>
        <circle id="positionPoint" cx="200" cy="500" r="12.5" fill="red" />
      </svg> 
      */}
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
  .image__div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: red;

    width: 95%;
    height: 95%;
  }
`;

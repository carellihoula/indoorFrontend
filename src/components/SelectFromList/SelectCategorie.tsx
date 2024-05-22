import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export default function MultipleSelectPlaceholder() {
  const [value, setValue] = useState("Choisir une Catégorie");
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const selectitemHandler = (item: string) => {
    setValue(item);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Container>
      <div className="input__div">
        <input type="text" value={value} onChange={handleChange} />
        <IoIosArrowDown color="black" size={24} />
      </div>

      <div className="list mt-2">
        {names.map((a, index) => {
          return (
            <div
              key={index}
              className="list__item"
              onClick={() => selectitemHandler(a)}
            >
              {a}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 5px;
  .input__div {
    display: flex;
    border-radius: 5px;
    border: 1px solid black;
    align-items: center;
    width: 70%;
    padding: 5px;
  }
  input {
    border-style: none;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    outline: none;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 5px;
    width: 70%;
    border: 1px solid black;
    max-height: 200px;
    overflow-y: auto;
  }
  .list__item {
    padding: 5px;
  }
  .list__item:hover {
    background-color: #eaeaea;
    padding: 5px;
    cursor: pointer;
  }
`;

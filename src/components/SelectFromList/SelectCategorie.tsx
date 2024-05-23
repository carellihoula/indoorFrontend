import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export default function MultipleSelectPlaceholder() {
  const [value, setValue] = useState("");
  const [showItems, setShowItems] = useState<boolean>(false);

  const names = [
    "Ordinateurs portables",
    "Ordinateurs de bureau",
    "Moniteurs",
    "Claviers",
    "Souris",
    "Imprimantes",
    "Scanners",
    "Oscilloscopes",
    " Multimètres",
    "Générateurs de signaux",
    " Stations de soudage",
    "Plaques de prototypage",
    "Kits de composants électroniques",
  ];

  useEffect(() => {
    if (value === "") {
      setShowItems(false);
    }
  }, [value]);

  const selectitemHandler = (item: string) => {
    setValue(item);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value !== "") {
      setShowItems(true);
    }
  };
  const showItemsHandler = () => {
    setShowItems(!showItems);
  };
  return (
    <Container>
      <div className="input__div">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Choisir une Catégorie"
        />
        <IoIosArrowDown
          color="black"
          size={24}
          onClick={showItemsHandler}
          style={{ cursor: "pointer" }}
        />
      </div>
      {showItems && (
        <div className="list mt-2">
          {names
            .filter((item) =>
              value ? item.toLowerCase().includes(value.toLowerCase()) : true
            )
            .map((a, index) => {
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
      )}
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
    background-color: #fff;
    border-radius: 5px;
    width: 70%;
    border: 1px solid black;
    min-height: 100px;
    max-height: 200px;
    overflow-y: auto;
  }
  .list__item {
    padding: 5px;
    //background-color: red; ==> for debug
  }
  .list__item:hover {
    background-color: #eaeaea;
    padding: 5px;
    cursor: pointer;
  }
`;

import styled from "styled-components";

export default function MultipleSelectPlaceholder() {
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
  return (
    <Container>
      <input type="text" />
      <div className="list__item mt-2">
        {names.map((a, index) => {
          return <div key={index}>{a}</div>;
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 5px;
  input {
    border: 1px solid black;
  }
  .list__item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid black;
    max-height: 200px;
    overflow-y: auto;
  }
`;

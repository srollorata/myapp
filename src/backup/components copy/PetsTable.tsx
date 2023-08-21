import React, { useState } from "react";

interface Props {
  pets: any[];
}

export default function PetsTable({ pets }: Props) {
  const [selectedIndex, setIndex] = useState(0);
  const [textAge, setTextAge] = useState(0);
  const [display, setDisplay] = useState(0);

  // let currentPetAge = 0;
  // // const handleClick = () => {
  // //   setTextAge(currentPetAge);
  // // };
  return (
    <>
      <ul className="list-group">
        {pets.map((object, index) => (
          <li
            key={object.id}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setIndex(index);
              setTextAge(object.age);
            }}
          >
            {object.name} ({object.animal})
          </li>
        ))}
      </ul>
      <h1>Age: {display}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setDisplay(textAge);
        }}
      >
        Select
      </button>
    </>
  );
}

import React, { useState } from "react";

function Sample({ pets }) {
  const [selectedIndex, setIndex] = useState(0);
  return (
    <>
      <ul className="list-group">
        {pets.map((object, index) => (
          <li
            key={object.id}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setIndex(index)}
          >
            {" "}
            {object.name} {} ({object.animal})
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sample;

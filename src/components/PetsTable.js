import React, { useState } from "react";
import UseFetch from "./UseFetch";
import { NavLink } from "react-router-dom";

export default function PetsTable() {
  const { data: pets, loading, error } = UseFetch("http://localhost:7000/pets");
  const [selectedIndex, setIndex] = useState(0);
  const [tempID, settemID] = useState(0);

  const handleDelete = () => {
    fetch("http://localhost:7000/pets/" + tempID, {
      method: "DELETE",
    }).then(() => {
      console.log("Data Deleted");
    });
  };

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>No data found</h4>}
      {pets && (
        <ul className="list-group">
          {pets.map((object, i) => (
            <li
              key={object.id}
              className={
                selectedIndex === i
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setIndex(i);
                settemID(object.id);
              }}
            >
              <div className="grid grid-cols-2">
                {/* Data Lists */}
                <div>
                  {object.name} <sup>({object.breed})</sup>
                </div>
                {/* Actions */}
                <div className="btn-group" role="group">
                  {/* View Button */}
                  <NavLink
                    className={
                      selectedIndex === i
                        ? "btn btn-light"
                        : "btn btn-primary d-none"
                    }
                    to={`/pets/${tempID}`}
                  >
                    View
                  </NavLink>

                  {/* Update Button */}
                  <NavLink
                    className={
                      selectedIndex === i
                        ? "btn btn-light"
                        : "btn btn-primary d-none"
                    }
                    to={"/update"}
                  >
                    Update
                  </NavLink>

                  {/* Delete Button */}
                  <button
                    type="button"
                    className={
                      selectedIndex === i ? "btn btn-danger" : "d-none"
                    }
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

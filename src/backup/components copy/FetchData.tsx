import React, { useEffect, useState } from "react";

interface Props {
  db: "pets" | "books";
}

interface Pets {
  name: string;
  age: number;
  animal: string;
  gender: string;
  id: number;
}

interface Books {
  title: string;
  author: string;
  yearPublished: number;
  genre: string;
  sold: number;
  currency: string;
  id: number;
}

export default function FetchData({ db }: Props) {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/${db}`)
      .then((respond) => {
        return respond.json();
      })
      .then((data) => {
        console.log("db.json : ", data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>{db === "pets" ? "Pets" : "Books"}</h1>
        <ul className="list-group">
          {data.map((object, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => {
                setIndex(index);
              }}
            >
              {db === "pets" ? (
                <>
                  {(object as Pets).name} - {(object as Pets).animal}
                </>
              ) : (
                <>
                  {(object as Books).title} - {(object as Books).author}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

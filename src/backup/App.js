import React, { useState } from "react";
import FetchData from "./components/FetchData.tsx";

function App() {
  const [db, setDB] = useState("books");

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setDB("books")}
      >
        Fetch Books!
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setDB("pets")}
      >
        Fetch Pets!
      </button>
      <FetchData db={db}> </FetchData>
    </>
  );
}

export default App;

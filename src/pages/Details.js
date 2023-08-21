import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "../components/UseFetch";

export default function Details() {
  const { id } = useParams();
  const nav = useNavigate();
  const {
    data: pets,
    loading,
    error,
  } = UseFetch("http://localhost:7000/pets/" + id);

  const handleDelete = () => {
    fetch("http://localhost:7000/pets/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Data Deleted");
      nav("/");
    });
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>No Data Found</h1>}
      {pets && (
        <>
          <div className="card w-50 mb-3 mt-3" key={pets.id}>
            <div className="card-header">Pet Information</div>
            <article className="card-body">
              <h2 className="card-title">{pets.name}</h2>
              <pre className="card-text">Age: {pets.age}</pre>
              <pre className="card-text">Breed: {pets.breed}</pre>
              <pre className="card-text">Gender: {pets.gender}</pre>
              <pre className="card-text">Owner: {pets.owner}</pre>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </article>
          </div>
        </>
      )}
    </>
  );
}

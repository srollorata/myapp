import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [owner, setOwner] = useState("Mystery");
  const history = useNavigate();

  const handleSubmit = (e) => {
    const data = { name, age, breed, gender, owner };
    e.preventDefault();

    fetch("http://localhost:7000/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("Submit Successful");
      history("/");
    });
  };

  return (
    <div className="card w-50 mb-3 mt-3">
      <div className="card-header">Add Pets</div>

      <form onSubmit={handleSubmit} className="card-body">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            placeholder="Input Name here.."
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            className="form-control"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Breed */}
        <div className="form-group">
          <label htmlFor="breed">Breed</label>
          <input
            className="form-control"
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label htmlFor="Gender">Gender</label>
          <select
            multiple
            className="form-control"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Owner */}
        <div className="form-group">
          <label htmlFor="owner">Owner</label>
          <input
            className="form-control"
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

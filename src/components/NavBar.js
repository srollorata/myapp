import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <NavLink className="btn btn-outline-primary" to={"/"}>
        Data
      </NavLink>
      <NavLink className="btn btn-outline-primary" to={"/add"}>
        Add
      </NavLink>
    </>
  );
}

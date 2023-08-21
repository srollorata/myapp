import React, { Component, useState, useEffect } from "react";

const UseFetch = (api) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(false);

  useEffect(() => {
    fetch(api)
      .then((respond) => {
        if (!respond.ok) {
          throw Error("Fetch Error");
        } else {
          return respond.json();
        }
      })
      .then((data) => {
        console.log("db.json : ", data);
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setEror(true);
      });
  }, []);

  return { data, loading, error };
};

export default UseFetch;

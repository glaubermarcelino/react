import './ApiIntegracao.css'
import React, { useState, useEffect } from "react";

export default (props) => {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://api.github.com/users/glaubermarcelino/repos"
    );
    const data = await response.json();

    setRepositorios(data);
  }, []);

  return (
    <>
      <h3>GITHUB Repositories</h3>
      <ul className="repository">
        {repositorios.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
};

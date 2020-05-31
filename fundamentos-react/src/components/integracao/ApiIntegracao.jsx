import "./ApiIntegracao.css";
import React, { useState, useEffect } from "react";

export default (props) => {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.github.com/users/glaubermarcelino/repos"
      );
      const data = await response.json();
      setRepositorios(data);
    }
    fetchData();
  }, []);

  function handleFavorite(id) {
    const newRepositories = repositorios.map((repo) => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    setRepositorios(newRepositories);
  }
  return (
    <>
      <h3>GITHUB Repositories</h3>
      <ul className="repository">
        {repositorios.map((repo) => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </>
  );
};

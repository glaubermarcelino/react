import React, { useState } from "react";

export default (props) => {
  const [numeros, setNumeros] = useState(Array(props.qtddeNumero).fill(0));

  function gerarNumerosNaoContido(array) {
    const min = 1;
    const max = 60;
    const novoNumero = parseInt(Math.random() * (max - min)) + min;

    return array.includes(novoNumero)
      ? gerarNumerosNaoContido(array)
      : novoNumero;
  }
  function GerarNumeros() {
      const novoArray = Array(props.qtddeNumero)
      .fill(0)
      .reduce(a=> [...a,gerarNumerosNaoContido(a)],[])
      .sort((a,b) => a-b)
    setNumeros(novoArray);
  }
  return (
    <div>
      <h3>Mega</h3>
      <h4>{numeros.join(" ")}</h4>
      <button onClick={GerarNumeros}>Gerar Número</button>
    </div>
  );
};

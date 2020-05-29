import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="InputContador">Passo: </label>
      <input
        id="InputContador"
        type="number"
        value={props.passo}
        onChange={(e) => {
          props.onPassoChange(+e.target.value);
        }}
      />
    </div>
  );
};

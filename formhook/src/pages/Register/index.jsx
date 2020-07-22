import React from "react";
import "./style.css";

import UseFormValidation from '../../components/UseFormValidation/UseFormValidation'

function Register() {
    UseFormValidation()
    
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Autenticado!", { email, password });
  }

  return (
    <div className="container">
      <h1>Registre-se</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="form-group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control"
              value={email}
              type="email"
              autoComplete="off"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="senha"
              type="password"
              className="form-control"
              value={password}
              autoComplete="off"
              placeholder="Senha"
              required
            />
          </div>
        </div>
        <button className="button">Login</button>
      </form>
    </div>
  );
}

export default Register;

import { React, Fragment } from "react";
import styled from "styled-components";
import logo from "./assets/foodMonks-sinfondo.png";

const Styles = styled.div`
  .text-center {
    position: absolute;
    left: 50%;
    top 45%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .form-signin {
    width: 500px;
  }

  .form-floating {
    margin-bottom: 10px;
  }

  button {
    color: white;
    background-color: #e87121;
    border: none;
    &:focus {
      box-shadow: 0 0 0 0.25rem rgba(232, 113, 33, 0.25);
    }
    &:hover {
      background-color: #da6416;
    }
    $:active {
      background-color: black !important;
    }
  }

  input {
    &:focus {
      box-shadow: 0 0 0 0.25rem rgba(232, 113, 33, 0.25);
    }
  }

`;

export const Login = () => (
  <Styles>
    <Fragment>
      <div className="text-center">
        <main className="form-signin">
          <form id="inputs">
            <a href="/">
              <img
                className="mb-4"
                src={logo}
                alt=""
                width="200"
                height="200"
              />
            </a>
            <h1 className="h3 mb-3 fw-normal">Ingrese con su mail</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Correo electronico</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Contraseña</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> No cerrar sesión
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Entrar
            </button>
            <p className="mt-5 mb-3 text-muted">
              ¿No tienes cuenta?<a href="/register">Registrate</a>
            </p>
          </form>
        </main>
      </div>
    </Fragment>
  </Styles>
);

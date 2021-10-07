import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Styles = styled.div`
  .btn-primary {
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
`;

const ItemCard = (props) => {
  return (
    <Styles>
      <div className="col-11 col-md6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} alt="productimg" class="card-im-top img-fluid" />
          <div className="card-body">
            <h5 class="card-title">{props.title}</h5>
            <h5 class="card-subtitle">${props.precio}</h5>
            <p class="card-text">{props.desc}</p>
            <Button className="btn-primary margin-auto">
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default ItemCard;

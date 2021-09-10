import React from "react";
import styled from "styled-components";
import { InputGroup } from "react-bootstrap";

const Styles = styled.div`
  .footer {
    margin-top: 30px;
    background-color: #e87121;
    border: none;
    clear: both;
    font-family: "Poppins", sans-serif;
  }
`;

export const Footer = () => (
  <Styles>
    <React.Fragment>
      <footer class="footer mt-auto py-3">
        <div class="container">
          <span className="text-muted">
            <InputGroup>
              <p>foodMonks@gmail.com</p>
            </InputGroup>
          </span>
        </div>
      </footer>
    </React.Fragment>
  </Styles>
);

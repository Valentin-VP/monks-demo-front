import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    background-color: #e87121;
    font-family: "Poppins", sans-serif;
  }
`;

export const Footer = () => (
  <Styles>
    <React.Fragment>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">foodmonksoficial@gmail.com</span>
        </div>
      </footer>
    </React.Fragment>
  </Styles>
);

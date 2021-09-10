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
      <footer class="footer mt-auto py-3">
        <div class="container">
          <span className="text-muted">foodMonks@gmail.com</span>
        </div>
      </footer>
    </React.Fragment>
  </Styles>
);

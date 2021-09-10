import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    margin-top: 70px;
    min-height: calc(100vh - 126px);
  }
`;

export const Layout = (props) => (
  <Styles>
    <Container className="contenedor">{props.children}</Container>
  </Styles>
);

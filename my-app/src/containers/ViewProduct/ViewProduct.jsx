import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { Button } from "antd";
import styled from "styled-components";
import { Col, Row } from "antd";
const ViewProductStyle = styled.div`
  .ant-btn-primary {
    background-color: violet;
  }
`;
const ViewProduct = () => (
  <ViewProductStyle>
    <h1>View Product page</h1>
    <div className="App">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  </ViewProductStyle>
);

export default ViewProduct;

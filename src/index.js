import React from "react";
import ReactDOM from "react-dom";
import { FormBuilder } from "react-formio";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FormBuilder
    form={{ display: "form" }}
    onChange={schema => console.log(JSON.stringify(schema))}
  />,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";

import { Tw } from "./tw";
import "./index.css";

ReactDOM.render(
  <h1 className={Tw().textBlueMid().absolute().$()}>
    Hello, world!
  </h1>,
  window.document.getElementById('root')
);

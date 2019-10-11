// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";
// import { Foo } from "./Foo";

// ReactDOM.render(<Foo />, document.getElementById('root'));

import { Tw } from "./tw";
import "./index.css";

const div = document.createElement("div");
div.innerHTML = "ahihi";
div.className = Tw().textBlueMid().bgBlueDark().$();
document.body.appendChild(div);

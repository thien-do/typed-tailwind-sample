import React from "react";

import { Tw } from "./tw";

const Foo2: React.FC = () => (
  <h1 className={Tw()
  .textBlueMid()
  .absolute().$()}>
    Hello, world!
  </h1>
);

const Foo3: React.FC = () => (
  <h1 className={Tw().textBlueMid().absolute().$()}>
    Hello, world!
  </h1>
);

export const Foo: React.FC = () => (
  <div className="tw-block">
    <Foo2></Foo2>
    <Foo3></Foo3>
  </div>
);
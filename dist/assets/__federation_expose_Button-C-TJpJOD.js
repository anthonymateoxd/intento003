import { importShared } from './__federation_fn_import-D0-elhzv.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const {useState} = await importShared('react');

const Button = () => {
  const { count, increment } = useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      id: "click-btn",
      className: "shared-btn",
      onClick: increment,
      children: [
        "hello world: ",
        count
      ]
    }
  ) });
};

export { Button, Button as default };

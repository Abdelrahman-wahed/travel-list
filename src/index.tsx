/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

// createRoot(document.getElementById("root")).render(<App />);
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

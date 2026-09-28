import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FoodContainer from "./FoodContainer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FoodContainer />
  </StrictMode>
);
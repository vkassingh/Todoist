import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoList from "./components/TodoList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);

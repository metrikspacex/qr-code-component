import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";

export default createBrowserRouter([
  {
    element: <Home />,
    path: "/qr-code-component/",
  },
]);

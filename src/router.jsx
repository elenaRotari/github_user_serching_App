import { createBrowserRouter } from "react-router-dom";

import App, { loader as users } from "./App";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: users,
  },
]);
export default router;

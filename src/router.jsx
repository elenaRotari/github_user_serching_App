import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import UserCard, { loader } from "./components/userCard/UserCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:user",
        element: <UserCard />,
        loader: loader,
      },
    ],
  },
]);
export default router;

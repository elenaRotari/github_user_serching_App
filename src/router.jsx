import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import UserCard, { action } from "./components/UserCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user",
        element: <UserCard />,
        action: action,
      },
    ],
  },
]);
export default router;

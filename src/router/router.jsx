import Main from "@/Layouts/Main";
import HomePage from "@/Pages/HomePage";

import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        }
      ]
    },
  ]);
export default router
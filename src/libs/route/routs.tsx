/* eslint-disable no-restricted-imports */
import {
  createHashRouter,
  } from "react-router-dom";

import { NotFound404 } from "../../core/404";
import { Layout } from "../../core/layout/layout";
import { Main } from "../../core/main";
  
 export const router = createHashRouter([
  {
    element: <Layout />,
    children:[
      {
      path: "/",
      element: <Main />,
      },
      {
        path: '*',
        element: <NotFound404 />,
      },
     
    ],
  }
]);
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Charts from './Charts.jsx'
import App from './App.jsx'
import './index.css'
import Prod from './Prod.jsx';
import SenaiMap from './Map.jsx';
import API from './API.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/prod",
    element: <Prod />,
  },
  {
    path: "/api",
    element: <API />,
  },
  {
    path: "/map",
    element: <SenaiMap />,
  },
  {
    path: "/charts",
    element: <Charts />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

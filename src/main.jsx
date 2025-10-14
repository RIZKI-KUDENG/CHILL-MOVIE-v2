import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/home.jsx'
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'
import MainLayout from './Components/Layouts/MainLayout.jsx'
import EditMovie from './Pages/editMovie.jsx'
import { MovieInitializer } from "./utils/MovieInitializer";
import './index.css'


MovieInitializer();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/editmovie",
        element: <EditMovie/>,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

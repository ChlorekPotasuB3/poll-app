import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
[
  {
    path: "/",
    element: <div>Link do app: <a href="/app">App</a></div>  
  },

  {
    path: "home",
    element: <div>Home</div>,
  },

  {
    path: "app",
    element: <div><h1>Lobby<App></App></h1></div>,

  },
]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

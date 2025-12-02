import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from './components/Layout'
import { Home } from './pages/Main/Home'
import { About } from './pages/Main/About'

const routesArray = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <About />}
    ]
  }
]

const router = createBrowserRouter(routesArray)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)

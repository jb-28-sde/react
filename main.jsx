import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'

const router= createBrowserRouter([{
  path:"/",
  element:<Home />,
  children:[{
    path:"about",
    element:<About />,
  },{
    path:"products",
    element:<Products />,
  },{
    path:"Contact",
    element:<Contact />,
  },{
    path:"services",
    element:<Services />,
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

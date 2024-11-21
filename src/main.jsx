import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App'
import PageNotFound from './pages/PageNotFound'
import Beneficios from './pages/Beneficios'
import Comunidade from './pages/Comunidade'
import Contato from './pages/Contato'
import Funcionalidades from './pages/Funcionalidades'
import Home from './Componentes/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path:'Funcionalidades', element: <Funcionalidades/>},
      {path:'beneficios', element: <Beneficios/>},
      {path:'comunidade', element: <Comunidade/>},
      {path:'contato', element: <Contato/>},
      {path:'*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
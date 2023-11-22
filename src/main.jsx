import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRouteFromElements,RouterProvider, Route } from 'react-router-dom';

import Layout from './Layout.jsx'
// import App from './App.jsx';


const router =createBrowserRouter(
  createRouteFromElements(
    <Route path='/' element={<Layout />}>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)

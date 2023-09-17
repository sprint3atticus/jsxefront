import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componentes/Home.jsx';
import Contato from './componentes/Contato.jsx';
import Sobre from './componentes/Sobre.jsx';
import Calculadora from './componentes/Calculadora.jsx';
import Error from './componentes/Error.jsx';

const router = createBrowserRouter([
  {
    
    path: '/',
    element: <App />,
    
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/contato', element: <Contato /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/cacluladora', element: <Calculadora />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

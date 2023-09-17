import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './componentes/Home.jsx';
import Contato from './componentes/Contato.jsx';
import Sobre from './componentes/Sobre.jsx';
import Calculadora from './componentes/Calculadora.jsx';
import Error from './componentes/Error.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/contato" component={Contato} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/calculadora" component={Calculadora} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

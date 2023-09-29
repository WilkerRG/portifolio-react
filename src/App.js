import './App.css';
import Home from './Home/home';
import Projetos from './Projetos/projetos';
import Sobre from './Sobre/sobre';
import Clientes from './Clientes/Clientes';
import Contato from './Contato/Contato';
import {  Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>


      <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Contato" element={<Contato />} />

      </Routes>

    </div>
  );
}

export default App;


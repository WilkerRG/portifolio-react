import './sobre.modules.css';
import Footer from '../componets/footer';
import Header from '../componets/header';
import wilker from './wilker.jpeg';

function Sobre() {
  return (
    <div className="projeto-sobre">
      <Header />
  
      <div className='main-sobre'>
        <img src = {wilker}/>
        <div className='text-sobre'>
          <h2>Sobre <span>Mim</span> </h2>
          <p>Olá, meu nome é Wilker Ribeiro Guimarães, tenho 22 anos nascido em Timóteo-MG. Estudante de Engenharia da Computação no CEFET-MG Campus Timóteo.
            Apaixonado por tecnologia, possuo grande interesse em trabalhar e aprender sobre diversos tópicos da área, como o desenvolvimento web.
          </p>
        </div>
      </div>

      <Footer />
    </div> 
  );
}

export default Sobre;

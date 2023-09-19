import './home.modules.css';
import Footer from '../componets/footer';
import Header from '../componets/header';
import device from './Devices-amico.png';

function Home() {
  return (
    <div className="projeto">
      <Header />
      <div className="Main">
        <div className='textContainer'>
          <h4>Ola, meu nome é</h4>
          <h1>Wilker <span>Guimarães</span></h1>
          <h3>Eu sou um estudante de desenvolvimento web</h3>
        </div>

        <div className='imageContainer'>
          <img src={device} />
        </div>

      </div>


      <Footer />
    </div >

  );
}

export default Home;

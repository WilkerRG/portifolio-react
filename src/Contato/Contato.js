import "./Contato.modules.css";
import Footer from '../componets/footer';
import Header from '../componets/header';
import Insta from './LogoInsta.png';
import Whats from './whatsapp-fill-svgrepo-com.svg';

function Contato() {
    return (
        <div className="projeto-contato">
            <Header />
            <div className="container-contato">
            <div className="me-contate">
                <p>Entre em contato e vamos ter uma conversa sobre o nosso projeto</p>
                <a href="https://api.whatsapp.com/send?phone=+5531995278941" target= "blank" >
                    <button type="button">Vamos conversar</button>
                </a>
            </div>


            <footer className="footerContatos">
           
                <div className="Redes-sociais">
                    <a href="https://www.instagram.com/wilkerrguima/" target= "blank" className="instagram"><img className="icon" src={Insta} alt="" /></a>
                    <a href ="https://api.whatsapp.com/send?phone=+5531995278941" target= "blank" className="whatsapp"><img className="icon" src={Whats} alt="" /></a>
                </div>
            </footer>
            </div>
            <Footer />
        </div>
    )
}
export default Contato;
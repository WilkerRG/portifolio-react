import "./Clientes.modules.css";
import Footer from '../componets/footer';
import Header from '../componets/header';

function Clientes() {
    return (
        <div className="projeto-clientes">
            <Header />
            <div className="Container-serviços">
                <div className="title">
                    <h2>Meus Clientes</h2>
                </div>

                <div className="Caixa">
                    <div className="Card">
                        <i className="fas fa-bars"></i>
                        <h5>Escola Batista de Acesita</h5>
                        <div className="Paragrafo-button">
                            <p>Somos uma instituição confessional de ensino particular, vinculada à Primeira Igreja Batista
                                de Acesita. Autorizados e certificados pelo MEC (Ministério de Educação e Cultura)
                                oferecemos serviços nas áreas de Educação Infantil, Ensino Fundamental e Ensino Médio.
                                <br />
                                <br />
                                <br />
                            </p>
                            <a href="https://site.escolaeba.com.br/index.html">
                                <button type="button">Ler Mais</button>
                            </a>
                        </div>
                    </div>


                    <div className="Card">
                        <i className="fas fa-user"></i>
                        <h5>Aperam South America</h5>
                        <div className="Paragrafo-button">
                            <p>A Aperam é um player global em aços inoxidáveis, elétricos e especiais, com clientes em mais
                                de 40 países. A partir de 31.12.2021, o negócio está organizado em quatro segmentos
                                principais reportáveis: Aços Inoxidáveis ​​e Elétricos, Serviços e Soluções, Ligas e
                                Especialidades e Reciclagem e Renováveis. </p>
                            <a href="https://www.aperam.com/about-us/">
                                <button type="button">Ler Mais</button>
                            </a>

                        </div>
                    </div>

                    <div className="Card">
                        <i className="fas fa-bell"></i>
                        <h5>Guimarães & Advogados</h5>
                        <div className="Paragrafo-button">
                            <p>
                                Somos um escritório especializado em diversas áreas do Direito, buscando com isso, prestar um serviço de qualidade e excelência, com
                                abrangência e eficiência para atender nossos clientes.
                                Entre em contato no número 3847-5094 e agende sua consulta jurídica.
                                <br />
                                <br />
                                <br />
                            </p>
                            <button type="button">Ler Mais</button>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>

    )

}
export default Clientes;
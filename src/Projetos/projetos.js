import "./projeto.modules.css";
import Footer from '../componets/footer';
import Header from '../componets/header';

function Projetos() {
  return (
    <div className="projeto-projetos">
      <Header />

      <div className="Container-serviços">

        <div></div>
        <div className="title">
          <h2>Meus projetos</h2>
        </div>


        <div className="Caixa">
          <div className="Card">
            <i className="fas fa-bars"></i>
            <h5>Sistema de Saúde Inteligente (SSI)</h5>
            <div className="Paragrafo-button">
              <p>O Sistema de Saúde Inteligente é uma plataforma inovadora que combina tecnologia vestível avançada,
                análise de dados em tempo real e aprendizado de máquina para monitorar e melhorar a saúde das pessoas.
                <br />
                <br />
                <br />

              </p>

              <button type="button">Ler Mais</button>
            </div>
          </div>

          <div className="Card">
            <i className="fas fa-user"></i>
            <h5>Cidade Conectada do Futuro (CCF)</h5>
            <div className="Paragrafo-button">
              <p>A Cidade Conectada do Futuro é uma iniciativa de transformar uma cidade em um ecossistema altamente inteligente e eficiente.
                Utilizando a Internet das Coisas (IoT) e uma infraestrutura de rede avançada.
                <br />
                <br />
                <br />
              </p>
              <button type="button">Ler Mais</button>
            </div>
          </div>

          <div className="Card">
            <i className="fas fa-bell"></i>
            <h5>Assistente Virtual com Consciência (AVC)</h5>
            <div className="Paragrafo-button">
              <p>O Assistente Virtual com Consciência é um projeto de inteligência artificial que vai além das funções tradicionais de assistentes virtuais.
                Equipado com uma compreensão avançada da linguagem e emoções humanas, o AVC executa tarefas como agendamento e respostas a perguntas. </p>
              <button type="button">Ler Mais</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projetos;
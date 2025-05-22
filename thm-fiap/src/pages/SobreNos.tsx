import React from 'react';
import './SobreNos.css';

const integrantes = [
  {
    nome: 'Fred Carvalho',
    funcao: 'Desenvolvedor Front-End',
    descricao: 'Responsável pela construção da interface do usuário e integração com os dados do mapa.',
    imagem: '/img/fred.jpeg',
    imagePosition: 'center 70%',
    linkedin: 'https://www.linkedin.com/in/fred-carvalho1721/'
  },
  {
    nome: 'João Pedro',
    funcao: 'Desenvolvedor Back-End',
    descricao: 'Atuou na estruturação dos dados, lógica de alagamento e gráficos históricos.',
    imagem: '/img/joao.jpg',
    imagePosition: 'center center',
    linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-albino-58206b316'
  },
  {
    nome: 'Felipe',
    funcao: 'Designer e Testes',
    descricao: 'Cuidou do layout, experiência do usuário e testes finais de usabilidade.',
    imagem: '/img/felipe.jpeg',
    imagePosition: 'center center',
    linkedin: 'https://www.linkedin.com/in/felipevazcoelho/'
  }
];

const SobreNos: React.FC = () => {
  return (
    <div className="sobre-nos-container">
      <div className="hero-section">
        <div className="container">
          <h1 className="display-4 text-center mb-4">Sobre Nós</h1>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mission-statement">
                <p className="lead text-center">
                  Somos uma equipe formada por três desenvolvedores comprometidos com a criação de soluções inovadoras e sustentáveis,
                  com o objetivo de contribuir para um futuro melhor para as próximas gerações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="about-content mb-5">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <p className="mb-4">
                Este projeto nasceu da nossa motivação em aplicar a tecnologia para enfrentar desafios reais da sociedade.
                Desenvolvemos um sistema de monitoramento de enchentes que utiliza dados geográficos, visualizações interativas e informações em tempo real
                para alertar a população sobre áreas de risco.
              </p>
              <p>
                Nosso trabalho é guiado por valores de excelência, ética e responsabilidade social,
                buscando sempre o desenvolvimento de tecnologias que impactem positivamente o cotidiano das pessoas e fortaleçam a prevenção de desastres naturais.
              </p>
            </div>
          </div>
        </div>

        <h2 className="section-title text-center mb-5">Nosso Time</h2>
        <div className="row">
          {integrantes.map((membro, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="team-card card h-100 border-0 shadow-lg">
                <div className="card-img-wrapper">
                  <img
                    src={membro.imagem}
                    alt={membro.nome}
                    className="card-img-top"
                    style={{
                      objectFit: 'cover',
                      height: '300px',
                      objectPosition: membro.imagePosition
                    }}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h4 className="card-title">{membro.nome}</h4>
                  <h6 className="card-subtitle mb-3 text-primary">{membro.funcao}</h6>
                  <p className="card-text">{membro.descricao}</p>
                  <a href={membro.linkedin} className="btn btn-outline-primary mt-3" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin me-2"></i>LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-section mt-5">
          <h2 className="section-title text-center mb-5">Tecnologias Utilizadas</h2>
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <p className="text-center mb-4">
                Para o desenvolvimento deste sistema, utilizamos tecnologias modernas e acessíveis que possibilitaram a construção de uma aplicação web interativa, responsiva e funcional:
              </p>
              <div className="row g-4">
                {[
                  { nome: 'React.js', descricao: 'Construção da interface do usuário de forma dinâmica e eficiente', icone: 'fab fa-react' },
                  { nome: 'TypeScript', descricao: 'Aumento da segurança e clareza no desenvolvimento com tipagem estática', icone: 'fas fa-code' },
                  { nome: 'Vite', descricao: 'Ferramenta moderna de build que oferece performance otimizada', icone: 'fas fa-bolt' },
                  { nome: 'Bootstrap', descricao: 'Responsividade e consistência visual com componentes prontos', icone: 'fab fa-bootstrap' },
                  { nome: 'Leaflet.js', descricao: 'Biblioteca para mapas interativos, permitindo exibir áreas de alagamento', icone: 'fas fa-map-marked-alt' },
                  { nome: 'React-Leaflet', descricao: 'Integração do Leaflet com React para renderização eficiente dos mapas', icone: 'fas fa-map' }
                ].map((tech, index) => (
                  <div key={index} className="col-md-4">
                    <div className="tech-card text-center p-3">
                      <i className={`${tech.icone} fa-2x mb-3 text-primary`}></i>
                      <h5>{tech.nome}</h5>
                      <p className="mb-0">{tech.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;

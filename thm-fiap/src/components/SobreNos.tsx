import React from 'react';

const integrantes = [
  {
    nome: 'Fred Carvalho',
    funcao: 'Desenvolvedor Front-End',
    descricao: 'Responsável pela construção da interface do usuário e integração com os dados do mapa.',
    imagem: '/images/fred.jpg',
  },
  {
    nome: 'João Pedro',
    funcao: 'Desenvolvedor Back-End',
    descricao: 'Atuou na estruturação dos dados, lógica de alagamento e gráficos históricos.',
    imagem: '/images/joao.jpg',
  },
  {
    nome: 'Felipe',
    funcao: 'Designer e Testes',
    descricao: 'Cuidou do layout, experiência do usuário e testes finais de usabilidade.',
    imagem: '/images/felipe.jpg',
  },
];

const SobreNos: React.FC = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Sobre Nós</h2>
      <p>
        Somos uma equipe formada por três desenvolvedores comprometidos com a criação de soluções inovadoras e sustentáveis,
        com o objetivo de contribuir para um futuro melhor para as próximas gerações.
        Este projeto nasceu da nossa motivação em aplicar a tecnologia para enfrentar desafios reais da sociedade.
        Desenvolvemos um sistema de monitoramento de enchentes que utiliza dados geográficos, visualizações interativas e informações em tempo real
        para alertar a população sobre áreas de risco.
        Nosso trabalho é guiado por valores de excelência, ética e responsabilidade social,
        buscando sempre o desenvolvimento de tecnologias que impactem positivamente o cotidiano das pessoas e fortaleçam a prevenção de desastres naturais.
      </p>
      <p>
        Escolhemos abordar o tema de monitoramento de enchentes por sua relevância social e impacto direto na vida das pessoas.
        Em um país com históricos frequentes de alagamentos e desastres naturais,
        entendemos que a tecnologia pode ser uma aliada poderosa na prevenção de riscos e na proteção de comunidades vulneráveis.
        Nosso objetivo foi desenvolver uma solução acessível e visual que ajude a informar, alertar e conscientizar a população em tempo real,
        contribuindo com a segurança e o bem-estar da sociedade.
      </p>

      <h3 className="mt-5 mb-4">Nosso Time</h3>
      <div className="row">
        {integrantes.map((membro, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <img
                src={membro.imagem}
                alt={membro.nome}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{membro.nome}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{membro.funcao}</h6>
                <p className="card-text">{membro.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-5 mb-4">Tecnologias Utilizadas</h3>
      <div className="card shadow-sm">
        <div className="card-body">
          <p>
            Para o desenvolvimento deste sistema, utilizamos tecnologias modernas e acessíveis que possibilitaram a construção de uma aplicação web interativa, responsiva e funcional:
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>React.js</strong>: construção da interface do usuário de forma dinâmica e eficiente.
            </li>
            <li className="list-group-item">
              <strong>TypeScript</strong>: aumento da segurança e clareza no desenvolvimento com tipagem estática.
            </li>
            <li className="list-group-item">
              <strong>Vite</strong>: ferramenta moderna de build que oferece performance otimizada durante o desenvolvimento.
            </li>
            <li className="list-group-item">
              <strong>Bootstrap</strong>: responsividade e consistência visual com componentes prontos.
            </li>
            <li className="list-group-item">
              <strong>Leaflet.js</strong>: biblioteca para mapas interativos, permitindo exibir áreas de alagamento.
            </li>
            <li className="list-group-item">
              <strong>React-Leaflet</strong>: integração do Leaflet com React para renderização eficiente dos mapas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;

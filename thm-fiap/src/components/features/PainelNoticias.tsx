import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";

const PainelNoticias = () => {
  const news = [
    {
      id: 1,
      title: "Fortes chuvas atingem São Paulo e alagam ruas",
      content: "Publicado em abril de 2025, este artigo da Agência Brasil relata alagamentos em diversas regiões da capital paulista devido a fortes chuvas.",
      img: "/img/noticia1.jpg",
      url: "https://agenciabrasil.ebc.com.br/geral/noticia/2025-04/chuvas-fortes-atingem-sao-paulo-e-alagam-ruas",
    },
    {
      id: 2,
      title: "Temporal causa alagamentos na região metropolitana de São Paulo",
      content: "Em fevereiro de 2025, a Agência Brasil reportou alagamentos e chamados de emergência devido a um temporal na região metropolitana.",
      img: "/img/noticia2.png",
      url: "https://www.cnnbrasil.com.br/nacional/sudeste/sp/cidade-de-sao-paulo-entra-em-estado-de-atencao-para-alagamentos-3/",
    },
    {
      id: 3,
      title:
        "Chuva em SP causa queda de árvores, alagamentos e falta de energia",
      content: "Reportagem do UOL de janeiro de 2025 sobre os efeitos de uma forte chuva que resultou em alagamentos e interrupções no fornecimento de energia.",
      img: "/img/noticia4.png",
      url: "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2024/12/21/chuva-causa-alagamentos-e-deixa-moradores-ilhados-em-sao-paulo-veja-video.htm",
    },
    {
      id: 4,
      title: "Por que chuvas em São Paulo têm provocado tantos estragos",
      content: "Análise da BBC publicada em março de 2025 que explora as razões pelas quais as chuvas têm causado danos significativos na cidade.",
      img: "/img/noticia5.jpg",
      url: "https://www.bbc.com/portuguese/articles/c4g944q07vlo",
    },
    {
      id: 5,
      title: "Córrego transborda após temporal em São Paulo | CNN 360°",
      content: "Vídeo da CNN Brasil mostrando o transbordamento de um córrego após fortes chuvas em São Paulo.",
      img: "/img/noticia6.png",
      url: "https://www.facebook.com/watch/?v=619334270799222",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="news-slide">
              <h3>{item.title}</h3>
              <a href={item.url} target="_blank"><img src={item.img} alt="noticia" className="img-fluid"></img></a>
              <p>{item.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PainelNoticias;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./galeria.module.css";
import item1 from "../../assets/comunidade.jpg"
import item2 from "../../assets/entrega.webp"
import item3 from "../../assets/comunitaria.jpg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Galeria() {
  const slides = [
    { src: item1, descricao: "Imagem 1" },
    { src: item2, descricao: "Imagem 2" },
    { src: item3, descricao: "Imagem 3" },
  ];

  return (
    <div id="Galeria" className={styles.carrossel}>
      <h1>Nós fazemos a diferença</h1>

      <div className={styles.conteinerGaleria}>
        <Swiper
          className={styles.swiperContainer}
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.src}
                alt={item.descricao}
                className={styles.imagemSlide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
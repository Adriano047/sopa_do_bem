import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./galeria.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Galeria() {
  const slides = [
    { tipo: "video", src: "https://www.youtube.com/embed/MHaEazb63CI?si=a8fXcam38IEtdHGF", descricao: "Vídeo 1" },
    { tipo: "video", src: "https://www.youtube.com/embed/hsZVlDQEwnI", descricao: "Vídeo 2" },
    { tipo: "imagem", src: "https://rounder.pics/assets/img/ui/square-image.webp", descricao: "Imagem 1" },
  ];

  return (
    <div id="Galeria" className={styles.carrossel}>
      <h1>Nós fazemos a diferença</h1>

      <div className={styles.conteinerGaleria}>
        <Swiper
          className={styles.swiperContainer}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        // autoplay={{ delay: 3500, disableOnInteraction: false }}
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              {item.tipo === "video" ? (
                <div className={styles.videoContainer}>
                  <iframe
                    src={item.src}
                    title={item.descricao}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img src={item.src} alt={item.descricao} className={styles.imagemSlide} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  );
}

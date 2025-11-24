import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./galeria.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Declaração dos tipos do YT (YouTube Iframe API) ---
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export function Galeria() {
  const slides = [
    { tipo: "video", src: "https://www.youtube.com/embed/MHaEazb63CI?enablejsapi=1", descricao: "Vídeo 1" },
    { tipo: "video", src: "https://www.youtube.com/embed/hsZVlDQEwnI?enablejsapi=1", descricao: "Vídeo 2" },
    { tipo: "imagem", src: "https://rounder.pics/assets/img/ui/square-image.webp", descricao: "Imagem 1" },
  ];

  const players = useRef<any[]>([]);
  const [ativo, setAtivo] = useState<number | null>(null);

  // Carrega script da API do YouTube
  useEffect(() => {
    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      slides.forEach((slide, i) => {
        if (slide.tipo === "video") {
          players.current[i] = new window.YT.Player(`yt-player-${i}`, {
            events: {
              onStateChange: (event: any) => {
                if (event.data === window.YT.PlayerState.PAUSED) {
                  setAtivo(null);
                }
              },
            },
          });
        }
      });
    };
  }, []);

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
              {item.tipo === "video" ? (
                <div className={styles.videoContainer}>
                  {ativo !== i && (
                    <div
                      className={styles.videoOverlay}
                      onClick={() => setAtivo(i)}
                    >
                      ▶
                    </div>
                  )}
                  <iframe
                    id={`yt-player-${i}`}
                    src={item.src}
                    title={item.descricao}
                    allowFullScreen
                    style={{
                      pointerEvents: ativo === i ? "auto" : "none",
                    }}
                  />
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.descricao}
                  className={styles.imagemSlide}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

import styles from './fundadores.module.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Card from "../../component/card"
import testeImagem from "../../assets/usuario.jpg"

export function Fundadores() {

    const slides = [
        <Card estiloCard={styles} imagemLocal={testeImagem} nome="Godrick Grifindor" textoCard="Lorem Ipsum is simply dummy text of the printing and typesetting industry." textoBotao="Mais detalhes" />,
        <Card estiloCard={styles} imagemLocal={testeImagem} nome="Joana Dark" textoCard="Lorem Ipsum is simply dummy text of the printing and typesetting industry." textoBotao="Mais detalhes" />,
        <Card estiloCard={styles} imagemLocal={testeImagem} nome="Santa Teresa" textoCard="Lorem Ipsum is simply dummy text of the printing and typesetting industry." textoBotao="Mais detalhes" />
    ]

    return (
        <div id="Fundadores" className={styles.secaoFundadores}>
            <h1>A alma da ONG</h1>

            <div className={styles.containerCarrossel}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3500,
                        pauseOnMouseEnter: true
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.containerCard}>
                                {slide}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

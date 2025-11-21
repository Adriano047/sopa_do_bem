// import Swiper core and required modules
import styles from './fundadores.module.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper "
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "../../component/card"
import testeImagem from "../../assets/usuario.jpg"
export function Fundadores() {
    const slides = [
        <Card estiloCard={styles} imagemLocal={testeImagem} nome="Godrick Grifindor" textoCard="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " textoBotao="Mais detalhes" />,
        <Card estiloCard={styles} imagemLocal={testeImagem} nome="Joana Dark" textoCard="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " textoBotao="Mais detalhes" />,
        <Card estiloCard={styles} imagemLocal={testeImagem} nome="Santa Teresa" textoCard="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " textoBotao="Mais detalhes" />
    ];

    return (
        <div id="Fundadores" className={styles.secaoFundadores}>
            <h1>A alma da ONG</h1>
            <div className={styles.containerCarrossel}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {slides.map((item, i) => (
                        <SwiperSlide key={i}>
                            {item}
                        </SwiperSlide>
                    ))}
                </Swiper></div>
        </div>
    )
}
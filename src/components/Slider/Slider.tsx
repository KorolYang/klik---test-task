import { Swiper, SwiperSlide } from "swiper/react";
import slide_1 from "../../assets/images/slide-1.png";
import slide_2 from "../../assets/images/slide-2.png";
import slide_3 from "../../assets/images/slide-3.png";
import "swiper/css";
import "swiper/css/autoplay";
import s from "./Slider.module.css";
import { Autoplay } from "swiper/modules";
import Button from "../Button/Button";

interface Slide {
  image: string;
  title: string;
  descr: string;
}

const slides: Slide[] = [
  {
    image: slide_1,
    title: "AFRUBBERTECH®",
    descr: "Ваш проверенный и надежный партнер",
  },
  {
    image: slide_2,
    title: "Ленты PVG",
    descr: "Надежный помощник в шахтах",
  },
  {
    image: slide_3,
    title: "Резинотросные ленты",
    descr: "Надежный помощник в трудных условиях",
  },
];

export const Slider = () => {
  return (
    <section className="section-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 0 }}
        speed={10000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={s.slideContent}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className={s.slideOverlay}></div>
              <div className={s.slideInfo}>
                <h2 className={s.slideTitle}>{slide.title}</h2>
                <p className={s.slideDescr}>{slide.descr}</p>
                <Button text="Подробнее" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

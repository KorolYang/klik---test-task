import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from '../Slide/Slide';
import slide_1 from '../../assets/images/slide-1.png';
import slide_2 from '../../assets/images/slide-2.png';
import slide_3 from '../../assets/images/slide-3.png';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import s from './Slider.module.css';

export interface Slide {
  image: string;
  title: string;
  descr: string;
}

const slides: Slide[] = [
  {
    image: slide_1,
    title: 'AFRUBBERTECH®',
    descr: 'Ваш проверенный и надежный партнер',
  },
  {
    image: slide_2,
    title: 'Ленты PVG',
    descr: 'Надежный помощник в шахтах',
  },
  {
    image: slide_3,
    title: 'Резинотросные ленты',
    descr: 'Надежный помощник в трудных условиях',
  },
];

export const Slider: FC = () => {
  return (
    <section className={s.container}>
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
            <Slide image={slide.image} descr={slide.descr} title={slide.title} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

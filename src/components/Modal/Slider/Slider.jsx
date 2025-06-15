import { useTranslation } from 'react-i18next';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { getImageUrl } from '../../../utils';

export const Slider = ({ projectTitle }) => {
    const { i18n } = useTranslation('projects-overview');

    const overviewData = i18n.getResourceBundle(i18n.language, 'projects-overview');
    const slides = overviewData[projectTitle] || [];

    if (!slides || slides.length === 0) {
        return <div className={styles.noSlides}>No overview available for "{projectTitle}"</div>;
    }

    return (
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={styles.slide}>
                  <img
                    src={getImageUrl("overviews/" + slide.image)}
                    alt={`Slide ${slide.id} for ${projectTitle}`}
                    className={styles.slideImage}
                  />
                  <p className={styles.slideText}>
                    {slide.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    );
};

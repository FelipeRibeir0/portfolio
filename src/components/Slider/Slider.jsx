import React, { useState } from 'react';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import overviewData from '../../data/projects-overview.json';
import { getImageUrl } from '../../utils';

export default function Slider({ projectTitle }) {
    const overview = overviewData[projectTitle] || [];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.sliderContainer}>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerView={1}
                navigation
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {overview.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={styles.slide}>
                            <img
                                src={getImageUrl("overviews/" + item.image)}
                                alt={`Slide ${item.id}`}
                                className={styles.slideImage}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className={styles.slideText}>
                {overview[activeIndex]?.text}
            </p>
        </div>
    );
}

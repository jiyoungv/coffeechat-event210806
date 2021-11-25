import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css'
import { Partners } from './Style';
import { Inners } from '../Styles/Common';
import img_partner_tit from '../../assets/images/img_partner_tit.png';
import partnerData from '../../data/partnerData';

SwiperCore.use([Autoplay]);

function Partner () {
    const partnerStories = partnerData.map((story, index) => {
        return (
            <SwiperSlide key={story.id}>
                <div className="partner-story-con">
                    <a href={story.link} target="_blank" rel="noreferrer" title={`${story.name}님`}>
                        <img src={story.image} alt={story.title} />
                    </a>
                </div>
            </SwiperSlide>
        );
    });

    return (
        <Partners>
            <figure className="partner-tit">
                <img src={img_partner_tit} alt="커피챗 파트너 스토리" />
            </figure>
            <Inners>
                <Swiper
                    spaceBetween={14}
                    loop={true}
                    autoplay={{
                        'delay': 5000,
                        'disableOnInteraction': false
                    }}
                    className='partner-story'>
                    {partnerStories}
                </Swiper>
            </Inners>
        </Partners>
    );
}

export default Partner;
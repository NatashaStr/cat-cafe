import React, { useState, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";

import {
  SliderWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyledSlide,
  StyledSlideMini,
  RightArrow,
  StyledButtonLeft,
  StyledButtonRight
} from "./styles";

SwiperCore.use([Navigation, Thumbs]);

function Gallery({ slides = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <StyledSwiper
        spaceBetween={20}
        loop
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(slider) => {
          setActiveSlide(slider.realIndex);
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyledSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            ></StyledSlide>
          </SwiperSlide>
        ))}
        ;
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          spaceBetween={20}
          slidesPerView={4}
          freemode
          watchSlidesProgress
          loop
          onSwiper={(e) => {
            setThumbsSwiper(e);
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyledSlideMini
                $active={activeSlide === index}
                src={slide.src}
                alt={slide.alt}
              ></StyledSlideMini>
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigationNextRef}>
          <RightArrow />
        </StyledButtonRight>
      </SliderWrapper>
    </>
  );
}

export default Gallery;

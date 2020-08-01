import React, { useEffect, useState, useRef } from 'react';
import { SliderContainer } from './style';

// import Swiper from 'swiper/dist/js/swiper.js'
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";   // swiper 样式引入


function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;
  const paginationRef = useRef()

  useEffect(() => {
    if(bannerList.length && !sliderSwiper){
        let sliderSwiper = new Swiper(".slider-container", {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: { el: paginationRef.current},
        });
        setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length])
  console.log(bannerList.length);
  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination" ref={paginationRef}></div>
      </div> 
    </SliderContainer>
  );
}


export default React.memo(Slider);
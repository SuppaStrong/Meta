import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import shape1 from "../../assets/images/backgroup-secsion/bg-gradient1.png";
import shape2 from "../../assets/images/backgroup-secsion/bg-gradient2.png";
import shape3 from "../../assets/images/backgroup-secsion/bg-gradient3.png";
import defaultImage from "../../assets/images/backgroup-secsion/img_bg_page_title.jpg";
import { getPageByTitle } from "../../utils/SlugUtils";

const SliderStyle1 = ({ data }) => {
  const [headerImageUrl, setHeaderImageUrl] = useState(() => {
    return localStorage.getItem("headerImageUrl") || defaultImage;
  });

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const fetchAndCacheImage = async () => {
      if (localStorage.getItem("headerImageUrl")) {
        setIsImageLoaded(true);
        return;
      }

      try {
        const page = await getPageByTitle("games");
        const imageUrl = page?.headerImage?.headerImage?.node?.mediaItemUrl || defaultImage;
        await preloadImage(imageUrl);
        localStorage.setItem("headerImageUrl", imageUrl);
        setHeaderImageUrl(imageUrl);
        setIsImageLoaded(true);
      } catch (error) {
        console.error("Failed to fetch or preload header image:", error);
        setHeaderImageUrl(defaultImage);
        setIsImageLoaded(true);
      }
    };

    fetchAndCacheImage();
  }, []);

  return (
    <div className="mainslider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        scrollbar={{ draggable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={item.class}>
            <SliderItem item={item} headerImageUrl={isImageLoaded ? headerImageUrl : defaultImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SliderStyle1.propTypes = {
  data: PropTypes.array.isRequired,
};

const SliderItem = ({ item, headerImageUrl }) => (
  <div className="flat-title-page" style={{ backgroundImage: `url(${headerImageUrl})` }}>
    <img className="bgr-gradient gradient1" src={shape1} alt="Gradient 1" />
    <img className="bgr-gradient gradient2" src={shape2} alt="Gradient 2" />
    <img className="bgr-gradient gradient3" src={shape3} alt="Gradient 3" />
    <div className="shape item-w-16"></div>
    <div className="shape item-w-22"></div>
    <div className="shape item-w-32"></div>
    <div className="shape item-w-48"></div>
    <div className="shape style2 item-w-51"></div>
    <div className="shape style2 item-w-51 position2"></div>
    <div className="shape item-w-68"></div>
    <div className="overlay"></div>
    <div className="swiper-container mainslider home">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slider-item">
            <div className="themesflat-container">
              <div className="wrap-heading flat-slider flex">
                <div className="content">
                  <h2 className="heading">{item.title_1}</h2>
                  <h1 className="heading mb-style">
                    <span>{item.title_2}</span>
                  </h1>
                  <h1 className="heading">
                    <span className="fill">{item.title_3}</span>
                    {item.title_4}
                  </h1>
                  <p className="sub-heading">{item.description}</p>
                  <div className="flat-bt-slider flex style2">
                    <Link to="/explore-01" className="sc-button header-slider style style-1 rocket fl-button pri-1">
                      <span>Explore</span>
                    </Link>
                    <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1">
                      <span>Create</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <img
          src="../assets/images/bottom-white.svg"
          alt="Axies"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "90px",
            display: "block",
            zIndex: 1,
          }}
        />
  </div>
);

SliderItem.propTypes = {
  item: PropTypes.object.isRequired,
  headerImageUrl: PropTypes.string,
};

const preloadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });

export default SliderStyle1;

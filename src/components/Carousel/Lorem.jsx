import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Lorem = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container rounded ">
      <Slider {...settings}>
        <div>
          <img
            className="rounded w-full h-[220px] "
            src="/assets/images/ux-LoremSprint.png"
            alt="Slide 1"
          />
        </div>


        <div>
          <video
            className=" rounded h-full object-center"
            controls
            controlsList="nodownload  noremoteplayback">
            <source src="/assets/videos/lorem app.mp4" type="video/mp4" />
          </video>
        </div>

      </Slider>
    </div>
  );
};

export default Lorem;

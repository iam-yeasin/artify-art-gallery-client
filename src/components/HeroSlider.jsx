import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1000}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination]}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="relative h-[450px] md:h-[700px] w-full"
          style={{
            background: "url('/slide1.png') center/cover no-repeat",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-6 md:px-16 text-white">
            {/* <h1 className="text-3xl md:text-5xl font-bold">
              Discover Stunning Art
            </h1> */}

            <h1 className="text-3xl md:text-5xl font-bold italic">
              <Typewriter
                words={["Discover Stunning Art."]}
                // words={["Digital Art", "Paintings", "Illustrations"]}
                loop
                cursor
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </h1>
            <p className="mt-5 max-w-md italic">
              Digital Art | Paintings | Illustrations
            </p>

            <button className="mt-5 px-6 py-2 bg-gray-950 hover:bg-gray-50 hover:text-black transition rounded-lg italic cursor-pointer">
              Explore Artworks
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="relative h-[450px] md:h-[700px]"
          style={{
            background: "url('/slide2.png') center/cover no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-6 md:px-16 text-white">
            <h1 className="text-3xl md:text-5xl font-bold italic">
              <Typewriter
                words={["Showcase Your Creativity."]}
                loop
                cursor
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </h1>

            <p className="mt-5 max-w-md italic">
              Share your artworks | connect with artists | Explore Creativity.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="relative h-[450px] md:h-[700px]"
          style={{
            background: "url('/slide3.png') center/cover no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-6 md:px-16 text-white">
            <h1 className="text-3xl md:text-5xl font-bold italic">
              <Typewriter words={["Explore Creative Worlds."]} loop cursor />
            </h1>

            <p className="mt-5 max-w-md italic">
              Discover unique styles | inspiring visual stories | Showcase
              Talent.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

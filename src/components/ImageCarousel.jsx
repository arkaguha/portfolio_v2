// components/ImageCarousel.jsx
import Slider from "react-slick";

export default function ImageCarousel({ images }) {
  const settings = {
    dots: true, // small indicators below
    infinite: true, // loop images
    speed: 500, // animation speed
    slidesToShow: 1, // one image at a time
    slidesToScroll: 1,
    arrows: true, // next/prev arrows
    autoplay: true, // auto slide
    autoplaySpeed: 3000, // 3 seconds per slide
  };

  return (
    // <div className="w-[50%] mb-4">
    //   <Slider {...settings}>
    //     {images.map((image, index) => (
    //       <div key={index} className="flex justify-center">
    //         <img
    //           src={image}
    //           alt={`Slide ${index}`}
    //           className="h-60 w-[50%] object-cover object-center rounded-lg shadow-md"
    //         />
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
    <div className="w-full mb-4 flex justify-center">
      {/* Force visible size */}
      <div className="w-[400px] max-w-[45%]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex flex-col  justify-center">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="h-60 w-full object-cover object-center rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

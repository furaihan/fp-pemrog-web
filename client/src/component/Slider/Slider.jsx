import { useState, useEffect } from "react";
import "./Slider.css";
import { HiChevronDoubleDown } from "react-icons/hi";

function Slider() {
  const images = [
    {
      src: 'homie.jpg',
      alt: 'Image 1',
      caption: 'Hello, Welcome to My Jungle'
    },
    {
      src: 'berang-berang.jpg',
      alt: 'Image 2',
      caption: 'Meet Our Unique Animal'
    },
    {
      src: 'takahe.jpg',
      alt: 'Image 3',
      caption: 'Explore the Fauna around the World'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentImageIndex ? "slide active" : "slide"}
        >
          <img src={image.src} alt={image.alt} className="slide-image" />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
      <div className="arrow-down" onClick={scrollToBottom}>
        <HiChevronDoubleDown />
      </div>
      <button className="previous-button" onClick={goToPreviousImage}>
        <img className="previous-img" src="chevron-left.svg" alt="" />
      </button>
      <button className="next-button" onClick={goToNextImage}>
        <img className="next-img" src="chevron-right.svg" alt="" />
      </button>
    </div>
  );
}

export default Slider;

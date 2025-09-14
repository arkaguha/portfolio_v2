import { useState } from "react";

export default function ProjectImage({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Derived value, no need to store in state
  const viewImage = images[currentIndex];
  const imagesCount = images.length;

  function handleNextImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < imagesCount ? prevIndex + 1 : 0
    );
  }

  function handlePreviousImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : imagesCount - 1
    );
  }

  return (
    <div className="">
      <img src={viewImage} alt="" className=" rounded-xl" />
      <div className="text-center grid grid-cols-3 items-center p-2">
        <div className="text-right">
          <button
            className="text-3xl hover:text-2xl "
            onClick={handlePreviousImage}
          >
            ⬅️
          </button>
        </div>

        <p className="text-white">{currentIndex + "/" + imagesCount}</p>
        <div className="text-left">
          <button className="text-3xl hover:text-2xl" onClick={handleNextImage}>
            ➡️
          </button>
        </div>
      </div>
    </div>
  );
}

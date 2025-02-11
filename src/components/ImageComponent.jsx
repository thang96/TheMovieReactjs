import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ImageComponent = ({ src, width = 210, height = 300, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    if (src) {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
      };
      return;
    }
    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);
    return () => {
      img.onload = null;
    };
  }, [src, width, height]);

  return (
    <div className="">
      <img
        className={
          currentSrc === src || !src ? className : `${className} blur-md`
        }
        src={currentSrc}
        width={width}
        height={height}
      />
    </div>
  );
};
ImageComponent.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default ImageComponent;

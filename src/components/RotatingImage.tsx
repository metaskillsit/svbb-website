import { useState, useEffect } from "react";

interface RotatingImageProps {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}

const RotatingImage = ({
  images,
  alt,
  className = "",
  interval = 5000,
  loading = "lazy",
  width,
  height,
}: RotatingImageProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 600);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <img
      src={images[currentIdx]}
      alt={alt}
      className={`${className} transition-opacity duration-600 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      loading={loading}
      width={width}
      height={height}
    />
  );
};

export default RotatingImage;

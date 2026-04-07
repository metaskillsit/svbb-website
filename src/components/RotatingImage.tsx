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
  interval = 8000,
  loading = "lazy",
  width,
  height,
}: RotatingImageProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % images.length);
        setNextIdx((prev) => (prev + 1) % images.length);
        setTransitioning(false);
      }, 1200);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length <= 1) {
    return (
      <img src={images[0]} alt={alt} className={className} loading={loading} width={width} height={height} />
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[currentIdx]}
        alt={alt}
        className={`absolute inset-0 ${className} transition-opacity duration-[1200ms] ease-in-out ${transitioning ? "opacity-0" : "opacity-100"}`}
        loading={loading}
        width={width}
        height={height}
      />
      <img
        src={images[nextIdx]}
        alt={alt}
        className={`absolute inset-0 ${className} transition-opacity duration-[1200ms] ease-in-out ${transitioning ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
        width={width}
        height={height}
      />
    </div>
  );
};

export default RotatingImage;

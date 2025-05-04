import { useEffect, useState } from "react";
import styles from "./BrandUseCarousel.module.css";

interface ImageCarouselProps {
  images: string[];
}

export default function BrandUseCarousel({ images }: ImageCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  // Show next 4 images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Get 4 images starting from startIndex, wrapping around
  const visibleImages = Array.from({ length: 12 }, (_, i) => {
    return images[(startIndex + i) % images.length];
  });

  return (
    <div className={styles.carouselContainer}>
      {visibleImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`carousel-${index}`}
          className={styles.carouselImage}
        />
      ))}
    </div>
  );
}

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slides from "./Slides";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000 }),
  ]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <div className="embla relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <Slides />
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2"
      >
        <IoIosArrowBack size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
}

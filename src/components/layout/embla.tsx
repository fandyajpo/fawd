import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex items-center gap-4">
        <div className="min-w-0 w-44 bg-blue-500">Slide 1</div>
        <div className="min-w-0 w-44 bg-blue-200">Slide 2</div>
        <div className="min-w-0 w-44 bg-red-200">Slide 3</div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

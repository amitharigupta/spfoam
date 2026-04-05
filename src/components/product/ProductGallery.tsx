import { useState, useRef } from "react";
import sofaMain from "@/assets/sofa-main.jpg";
import sofaAngle from "@/assets/sofa-angle.jpg";
import sofaSide from "@/assets/sofa-side.jpg";
import sofaDetail from "@/assets/sofa-detail.jpg";
import sofaLifestyle from "@/assets/sofa-lifestyle.jpg";

const images = [sofaMain, sofaAngle, sofaSide, sofaDetail, sofaLifestyle];
const labels = ["Front", "Close-up", "Side", "Fabric", "Lifestyle"];

const ProductGallery = () => {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setZoomPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active < images.length - 1) setActive(active + 1);
      if (diff < 0 && active > 0) setActive(active - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div
        ref={containerRef}
        className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted cursor-crosshair"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[active]}
          alt={`Aubrey Sofa - ${labels[active]} view`}
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500"
          style={
            zoom
              ? {
                  transform: "scale(2)",
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                }
              : {}
          }
        />
        {/* Mobile swipe indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              i === active
                ? "border-foreground shadow-soft scale-105"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`${labels[i]} thumbnail`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;

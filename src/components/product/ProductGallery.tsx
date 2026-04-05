import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ZoomIn } from "lucide-react";
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
  const [vrMode, setVrMode] = useState(false);
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
        className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted cursor-crosshair group"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={images[active]}
            alt={`Aubrey Sofa - ${labels[active]} view`}
            width={1024}
            height={1024}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full object-cover"
            style={
              zoom
                ? {
                    transform: "scale(2)",
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  }
                : {}
            }
          />
        </AnimatePresence>

        {/* VR Mode Button */}
        <motion.button
          onClick={() => setVrMode(!vrMode)}
          className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Eye className="h-5 w-5" />
        </motion.button>

        {/* Zoom indicator */}
        {zoom && (
          <motion.div
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ZoomIn className="h-4 w-4" /> Zoom 2x
          </motion.div>
        )}

        {/* Mobile swipe indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
          {images.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 rounded-full ${
                i === active ? "bg-foreground" : "bg-foreground/30"
              }`}
              animate={{ width: i === active ? 24 : 6 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <motion.div className="hidden md:flex gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              i === active
                ? "border-foreground shadow-soft"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: i === active ? 1.05 : 1,
              borderColor: i === active ? "hsl(var(--foreground))" : "transparent",
            }}
          >
            <img
              src={img}
              alt={`${labels[i]} thumbnail`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.button>
        ))}
      </motion.div>

      {/* VR Mode Panel */}
      <AnimatePresence>
        {vrMode && (
          <motion.div
            className="p-4 rounded-xl bg-muted border border-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-sm text-foreground">360° Product View</h4>
              <button
                onClick={() => setVrMode(false)}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Drag or swipe to rotate the product. Use pinch to zoom on mobile.
            </p>
            <div className="grid grid-cols-5 gap-2">
              {images.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square rounded-lg overflow-hidden border text-xs font-semibold transition-all ${
                    i === active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-foreground hover:border-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;

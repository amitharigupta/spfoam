import { useRef } from "react";
import lifestyleImg from "@/assets/sofa-lifestyle.jpg";

const LifestyleSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <div
        ref={ref}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${lifestyleImg})` }}
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-card mb-4">
            Designed for Living
          </h2>
          <p className="text-lg text-card/80 font-body">
            Every curve, every stitch — meticulously crafted to elevate your everyday moments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;

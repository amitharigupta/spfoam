import recChair from "@/assets/rec-chair.jpg";
import recSectional from "@/assets/rec-sectional.jpg";
import recLoveseat from "@/assets/rec-loveseat.jpg";
import recTable from "@/assets/rec-table.jpg";

const products = [
  { name: "Elara Accent Chair", price: "$799", img: recChair, tag: "New" },
  { name: "Nova Sectional", price: "$2,499", img: recSectional, tag: "Best Seller" },
  { name: "Petal Loveseat", price: "$1,299", img: recLoveseat, tag: null },
  { name: "Orbit Coffee Table", price: "$449", img: recTable, tag: null },
];

const RecommendedProducts = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12">
        You May Also Love
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
        {products.map((p) => (
          <div
            key={p.name}
            className="flex-none w-64 md:w-72 snap-start group cursor-pointer"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {p.tag && (
                <span className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full bg-card/90 backdrop-blur text-foreground">
                  {p.tag}
                </span>
              )}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
            </div>
            <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
              {p.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecommendedProducts;

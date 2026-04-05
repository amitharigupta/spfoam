import { Check, X, Minus } from "lucide-react";

type Val = "yes" | "no" | "partial" | string;

const features: { name: string; smartgrid: Val; memory: Val; latex: Val }[] = [
  { name: "Body Adaptability", smartgrid: "yes", memory: "partial", latex: "no" },
  { name: "Breathability", smartgrid: "yes", memory: "no", latex: "partial" },
  { name: "Pressure Relief", smartgrid: "yes", memory: "yes", latex: "partial" },
  { name: "Temperature Neutral", smartgrid: "yes", memory: "no", latex: "partial" },
  { name: "Durability (10+ years)", smartgrid: "yes", memory: "no", latex: "yes" },
  { name: "No Sinking Feeling", smartgrid: "yes", memory: "no", latex: "yes" },
  { name: "Hypoallergenic", smartgrid: "yes", memory: "partial", latex: "yes" },
];

const Cell = ({ val }: { val: Val }) => {
  if (val === "yes") return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (val === "no") return <X className="w-5 h-5 text-destructive/60 mx-auto" />;
  return <Minus className="w-5 h-5 text-muted-foreground mx-auto" />;
};

const ComparisonTable = () => (
  <section className="py-20 lg:py-28 bg-lavender/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-heading text-foreground">
          The <span className="text-gradient">SmartGRID</span> Difference
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          See how our patented technology compares to traditional materials.
        </p>
      </div>

      <div className="max-w-4xl mx-auto glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 lg:p-5 font-heading font-bold text-foreground">Feature</th>
                <th className="p-4 lg:p-5 font-heading font-bold text-center">
                  <span className="text-gradient">SmartGRID</span>
                </th>
                <th className="p-4 lg:p-5 font-heading font-bold text-center text-muted-foreground">Memory Foam</th>
                <th className="p-4 lg:p-5 font-heading font-bold text-center text-muted-foreground">Latex</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.name} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/20" : ""}`}>
                  <td className="p-4 lg:p-5 font-medium text-foreground">{f.name}</td>
                  <td className="p-4 lg:p-5"><Cell val={f.smartgrid} /></td>
                  <td className="p-4 lg:p-5"><Cell val={f.memory} /></td>
                  <td className="p-4 lg:p-5"><Cell val={f.latex} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonTable;

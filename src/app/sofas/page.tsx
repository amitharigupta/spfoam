import ProductCard from './components/ProductCard';
import FilterSidebar from './components/FilterSidebar';
import { PRODUCTS } from './data/products';

export default function SofasPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">
          Sofas & Sectionals <span className="text-gray-500 text-sm">(303 Results)</span>
        </h1>

        {/* Sort */}
        <select className="mt-3 md:mt-0 border p-2 rounded">
          <option>Sort by Featured</option>
          <option>Price Low to High</option>
        </select>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">

        {/* Sidebar */}
        <div className="hidden md:block">
          <FilterSidebar />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
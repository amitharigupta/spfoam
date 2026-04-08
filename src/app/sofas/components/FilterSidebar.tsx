'use client';

export default function FilterSidebar() {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm">
      
      <h3 className="font-semibold mb-4">Filters</h3>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Sofas"
        className="w-full border p-2 rounded mb-4"
      />

      {/* Toggle */}
      <div className="flex items-center justify-between mb-4">
        <span>Ready to Ship</span>
        <input type="checkbox" />
      </div>

      {/* Width */}
      <div className="mb-4">
        <p className="text-sm mb-2">Width</p>
        <div className="flex gap-2">
          <input placeholder="Min" className="border p-1 w-1/2 rounded" />
          <input placeholder="Max" className="border p-1 w-1/2 rounded" />
        </div>
      </div>

      {/* Category */}
      <div>
        <p className="text-sm mb-2">Category</p>
        <div className="flex flex-col gap-1 text-sm">
          <label><input type="checkbox" /> Loveseats</label>
          <label><input type="checkbox" /> Sectionals</label>
          <label><input type="checkbox" /> Sleeper Sofas</label>
        </div>
      </div>
    </div>
  );
}
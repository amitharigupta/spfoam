interface LoadMoreButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export default function LoadMoreButton({ onClick, isVisible }: LoadMoreButtonProps) {
  if (!isVisible) return null;

  return (
    <div className="flex justify-center w-full mt-10 mb-6 px-4">
      <button
        onClick={onClick}
        className="
          w-full md:w-64               /* Responsive width */
          py-3 px-6 
          bg-black text-white 
          font-semibold rounded-lg
          hover:bg-gray-800 
          active:scale-95              /* Mobile touch feedback */
          transition-all duration-200 
          shadow-sm
        "
      >
        Load More
      </button>
    </div>
  );
}
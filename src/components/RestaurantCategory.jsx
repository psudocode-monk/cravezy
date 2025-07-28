import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ data, isActive, onShow }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      <div
        className="flex items-center justify-between cursor-pointer px-4 py-2 bg-green-50 hover:bg-green-100 transition-colors duration-200"
        onClick={onShow}
      >
        <span className="font-medium text-green-800 text-base">
          {data.title} ({data.itemCards.length})
        </span>

        {/* Chevron Icon */}
        <svg
          className={`w-4 h-4 text-green-600 transform transition-transform duration-300 ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isActive && (
        <div className="px-3 py-3">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

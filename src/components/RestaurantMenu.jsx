import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [categoryindex, setCategoryIndex] = useState(0)

  if (resInfo === null) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-lg text-gray-300 bg-gradient-to-br from-[#0f172a] via-[#0d9488] to-[#065f46]">
        Loading menu...
      </div>
    );
  }

  const {
    name,
    costForTwoMessage,
    avgRating,
    cuisines,
    areaName,
    city,
    locality,
    totalRatings,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0d9488] to-[#065f46] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Restaurant Info */}
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{name}</h1>
          <p className="text-sm text-gray-600 mb-2">{cuisines.join(", ")}</p>
          <div className="flex flex-wrap items-center text-sm text-gray-700 gap-4 mb-2">
            <span>
              📍 {locality}, {areaName}, {city}
            </span>
            <span className="text-yellow-600 font-semibold">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-500">({totalRatings} ratings)</span>
          </div>
          <p className="text-sm font-medium text-green-700">
            {costForTwoMessage}
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              isActive={categoryindex === index}
              onShow={() => setCategoryIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

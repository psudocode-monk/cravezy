import { CDN_URL } from '../utils/constant'

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } = resData?.info
  const slaString = resData?.info?.sla?.slaString || 'Unavailable'

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 p-4 cursor-pointer border border-green-100">
      <img
        className="w-full h-48 object-cover rounded-xl mb-3"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
      <p className="text-sm text-gray-500 mb-1 truncate">{cuisines.join(', ')}</p>
      <p className="text-sm text-gray-600 mb-1">
        ⭐ <span className="text-green-600 font-medium">{avgRating}</span>
        <span className="mx-1">•</span>
        ⏰ {slaString}
      </p>
      <h4 className="text-sm font-medium text-gray-800">{costForTwo}</h4>
    </div>
  )
}

export const WithPromotedlabel = (Component) => {
  return (props) => {
    return (
      <div className="relative border border-green-400 rounded-xl p-2 shadow-md hover:shadow-xl transition-all duration-300">
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
          Cravezy Recommended
        </span>
        <Component {...props} />
      </div>
    )
  }
}



export default RestaurantCard

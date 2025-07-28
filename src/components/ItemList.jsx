import { useDispatch } from 'react-redux'
import { CDN_URL } from '../utils/constant'
import { addItem } from '../utils/cartSlice'

export const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className="space-y-6">
      {items.map(item => (
        <div
          key={item.card.info.id}
          className="flex gap-4 items-start bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
        >
          {/* Image */}
          {item.card.info.imageId && (
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-28 h-24 object-cover rounded-xl border border-gray-200"
            />
          )}

          {/* Details */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.card.info.name}
              </h3>
              <span className="text-emerald-600 font-semibold">
                ₹{(item.card.info.defaultPrice ?? item.card.info.price) / 100}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
              {item.card.info.description}
            </p>

            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all shadow-sm cursor-pointer" 
              onClick={() => handleAddItem(item)}>
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

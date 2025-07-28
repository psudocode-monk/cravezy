import { useState, useEffect } from 'react'
import useOnlineStatus from '../utils/useOnlineStatus'
import { Link } from 'react-router'
import RestaurantCard, { WithPromotedlabel } from './RestaurantCard'
import Offline from './Offline'

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [listCopy, setListCopy] = useState([])
  const [searchText, setSearchText] = useState('')
  const [load, setLoad] = useState(true)

  const RestaurantCardPromoted = WithPromotedlabel(RestaurantCard)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData () {
    setLoad(true)
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()

    const restaurantList =
      json?.data?.cards?.find(
        c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []

    setListOfRestaurants(restaurantList)
    setListCopy(restaurantList)
    setLoad(false)
  }

  const onlineStatus = useOnlineStatus()

  return load ? (
    <div className="flex justify-center items-center min-h-[60vh] bg-gray-900">
      <div className="loader border-4 border-green-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
    </div>
  ) : (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search your favourite restaurants"
            className="w-full md:w-96 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-5 py-2 rounded-lg font-medium transition"
            onClick={() => {
              const filteredRestro = listOfRestaurants.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setListCopy(filteredRestro)
              setSearchText('')
            }}
          >
            Search
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium transition"
            onClick={() => setListCopy(listOfRestaurants)}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {!onlineStatus ? (
          <div className="col-span-full flex justify-center">
            <Offline />
          </div>
        ) : (
          listCopy.map(res => (
            <Link key={res.info.id} to={'/restaurants/' + res.info.id}>
              {
                res.info.promoted? <RestaurantCardPromoted resData={res}/> : <RestaurantCard resData={res} />
              }
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

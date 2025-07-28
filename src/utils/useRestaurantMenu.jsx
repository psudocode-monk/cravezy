import { useEffect, useState } from 'react'

const useRestaurantMenu = resId => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData () {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=' +
        resId +
        '&catalog_qa=undefined&submitAction=ENTER'
    )
    const json = await data.json()
    setResInfo(json?.data)
  }
  return resInfo
}
export default useRestaurantMenu

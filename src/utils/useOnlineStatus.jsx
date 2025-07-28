import { useState, useEffect } from 'react'

const useOnlineStatus = () => {
  // check if online and return online status(boolean

  const [onlineStatus, setOnlineStatus] = useState(true)

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false)
    })

    window.addEventListener('online', () => {
      setOnlineStatus(true)
    })
  }, [])
  return onlineStatus
}

export default useOnlineStatus

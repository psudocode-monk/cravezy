const Offline = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] bg-black">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center">
        <div className="w-4 h-4 mx-auto mb-3 rounded-full bg-red-500 animate-pulse"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Aww, looks like your internet is gone!
        </h2>
        <p className="text-gray-600">Please check your network settings.</p>
      </div>
    </div>
  )
}

export default Offline

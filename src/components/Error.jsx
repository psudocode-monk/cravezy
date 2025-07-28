import { useRouteError } from 'react-router'

const Error = () => {
  const err = useRouteError()
  console.log(err.data)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-6xl font-extrabold text-green-400 mb-4">
        Uh-oh! {err.status}
      </h1>
      <h2 className="text-xl text-gray-300">It's empty in here 😕</h2>
      <p className="text-sm text-gray-400 mt-2">
        Please check the URL or go back home.
      </p>
      <a
        href="/"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300 shadow-md"
      >
        Go Home
      </a>
    </div>
  )
}

export default Error

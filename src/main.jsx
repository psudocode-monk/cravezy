import ReactDOM from 'react-dom/client'
import { Body } from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import './index.css' 
import Cart from './components/Cart'


const Grocery = lazy(() => import('./components/Grocery'))  


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      },
      {
        path: '/groceries',
        element: <Suspense fallback={<div className='w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto my-8'></div>} ><Grocery /></Suspense>
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
  )
import Home from "../pages/home/index"
import { Explore } from "../pages/explore/index"
import {Notifications} from "../pages/notifications"



import {createBrowserRouter} from  'react-router-dom'
import { NotFound } from "../pages/404"
import MainLayout from "../layout/main"

const routes = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        { index: true, element: <Home /> },
        { path:"explore",element:<Explore/>},
        {path:"notifications",element:<Notifications/>},
        { path: "*", element: <NotFound /> }
      ]
    },
  ])
export default routes
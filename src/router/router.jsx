import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"

const routerConfig = [
   {
      path: '/',
      element: <MainPage />
   },
]

const AppRouter =
   <Routes>
      {routerConfig.map((route, index) => (
         <Route key={index} path={route.path} element={route.element} />
      ))}
   </Routes>

export default AppRouter
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from '../../Pages/Dashboard'


export const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<DashBoard/>}/>
           
        </Routes>
    </div>
  )
}

import { Route, Routes } from "react-router-dom"
import { Appointment } from "../pages/Appointment"
import { Dashboard } from "../pages/Dashboard"
import Login from "../components/Login"
export const MainRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
    </Routes>
}
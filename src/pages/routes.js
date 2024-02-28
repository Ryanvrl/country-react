import { Route, Routes } from "react-router-dom"
import { HomePage } from "../components/home-page"
import { CountryInfo } from "../components/country-info/country-info"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route  exact path="/" element={<HomePage />}/>
            <Route  exact path="/country/:country" element={<CountryInfo />}/>  
        </Routes>
    )
}
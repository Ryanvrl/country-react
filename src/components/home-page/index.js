import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { MainPage } from "../../styled/mainPage"
import { FiSearch } from 'react-icons/fi';
import { CardCountry } from "../cardCountry";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
    const { theme } = useContext(ThemeContext)
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState('')


    useEffect(() => {
        async function fetchData() {
            const response = await getCountries()
            console.log(response);
            setCountries(response)
        }
        fetchData()
    }, [])

    const getCountries = async () => {
        const response = await axios.get(`https://restcountries.com/v3.1/all`)
        return await response.data
    }

    return (
        <MainPage theme={theme}>
            <div className="filters">
                <div className="input">
                    <FiSearch color={theme.inputText} className="search-img" />
                    <input className="search-input" placeholder="search for a country..." value={search} onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-region">
                    <option hidden className="option-region" value=''>Filter by Region</option>
                    <option className="option-region" value="Africa">Africa</option>
                    <option className="option-region" value="Americas">America</option>
                    <option className="option-region" value="Asia">Asia</option>
                    <option className="option-region" value="Europe">Europe</option>
                    <option className="option-region" value="Oceania">Oceania</option>
                    <option className="option-region" value="">All</option>
                </select>
            </div>

            <div>
                <ul className="list-countries">
                    {countries
                        .filter((country) => country.region.toLowerCase().includes(filter.toLowerCase()))
                        .filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()))
                        .map((country) =>
                            <Link to={`country/${country.name.common}`} key={country.name.common} className="link">
                                <CardCountry countryData={country}/>
                            </Link>
                        )}
                </ul>
            </div>
        </MainPage>

    )
}

export { HomePage }
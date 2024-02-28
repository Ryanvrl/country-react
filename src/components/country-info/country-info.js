import { useParams } from "react-router-dom"
import { Country } from "../../styled/countryStyled"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../contexts/theme-context";


const CountryInfo = () => {
    const [country, setCountry] = useState({})
    const [name, setName] = useState({})
    const [flag, setFlag] = useState('')
    const [capital, setCapital] = useState([])
    const [topLevelDomain, setTopLevelDomain] = useState([])
    const [languages, setlanguages] = useState([])
    const [borders, setBorders] = useState([])
    const { theme } = useContext(ThemeContext)

    const countryData = useParams()


    useEffect(() => {
        async function fetchData() {
            const response = await getCountry()
            setCountry(response);
            setName(response.name)
            setFlag(response.flags.png)
            setCapital(response.capital)
            setTopLevelDomain(response.tld)
            setBorders(response.borders || ['none'])
            setlanguages(getForInFunction(response.languages))
        }
        fetchData()
    }, [])

    const getCountry = async () => {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryData.country}`)
        return await response.data[0]
    }

    const getForInFunction = (response) => {
        const arrayAll = []
        for (const property in response) {
            arrayAll.push(`${response[property]}`);
        }
        return arrayAll
    }

    console.log(country);

    return (
        <Country theme={theme}>
            <div>
                <img src={flag} alt={`flag ${name}`} className="flag-image" />
            </div>

            <div className="country-info">
                <h2>
                    {name.common}
                </h2>

                <div className="infos-container">
                    <div className="infos-main">
                        <div className="info">
                            <span>Official name: </span>
                            {name.official}
                        </div>
                        <div className="info">
                            <span>Population: </span>
                            {country.population}
                        </div>
                        <div className="info">
                            <span>Region: </span>
                            {country.region}
                        </div>
                        <div className="info">
                            <span>Sub Region: </span>
                            {country.subregion}
                        </div>
                        <div className="info">
                            <span>Capital: </span>
                            {capital
                                .map((capi) => capi)}
                        </div>
                    </div>

                    <div className="infos-aside">
                        <div className="info">
                            <span>Top Level Domain: </span>
                            {topLevelDomain
                                .map((tdl) => tdl)}
                        </div>
                        <div className="info">
                            <span>Languages: </span>
                            {languages
                                .map((language) =>
                                    <div key={language} className="info-contrast">
                                        {language}
                                    </div>
                                )}
                        </div>
                    </div>
                </div>

                <div className="footer-info">
                    <div className="info">
                        <span>Borders Countries: </span>
                        {borders
                            .map((border) => <div key={border} className="info-contrast">
                                {border}
                            </div>)}
                    </div>
                </div>

            </div>
        </Country>
    )
}

export { CountryInfo }
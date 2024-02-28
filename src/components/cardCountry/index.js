import { useContext } from "react"
import { CountryStyled } from "../../styled/cardCountryStyled"
import { ThemeContext } from "../contexts/theme-context"

const CardCountry = ({ countryData }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <CountryStyled theme={theme}>
            <img src={countryData.flags.png} className="flag"/>

            <div className="infos-country">
                <h3 className="name-country info">{countryData.name}</h3>
                <div className="population">
                    <span>Population: </span>
                    {countryData.population}
                </div>
                <div className="region info">
                    <span>Region: </span>
                    {countryData.region}
                </div>
                <div className="capital info">
                    <span>Capital: </span>
                    {countryData.capital}
                </div>
            </div>
        </CountryStyled>
    )
}

export { CardCountry }
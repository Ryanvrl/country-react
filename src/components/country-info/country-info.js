import { useParams } from "react-router-dom"
import { Country } from "../../styled/countryStyled"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { Loading } from "../loading/loading";
import { ErrorGet } from "../errorGet/errorGet";


const CountryInfo = () => {
    const [country, setCountry] = useState(null)
    const [name, setName] = useState({})
    const [flag, setFlag] = useState('')
    const [capital, setCapital] = useState([])
    const [topLevelDomain, setTopLevelDomain] = useState([])
    const [languages, setlanguages] = useState([])
    const [borders, setBorders] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const { theme } = useContext(ThemeContext)

    const countryData = useParams()

    useEffect(() => {
        async function fetchData() {
            getCountry()
        }
        fetchData()
    }, [])

    const getCountry = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryData.country}`).then(res => {
            if (!res.ok) {
                throw Error('Sorry, could not fetch the data')
            }
            return res.json()
        })
            .then(data => {
                setCountry(data[0]);
                setName(data[0].name)
                setFlag(data[0].flags.png)
                setCapital(data[0].capital)
                setTopLevelDomain(data[0].tld)
                setBorders(data[0].borders || ['none'])
                setlanguages(getForInFunction(data[0].languages))
                setIsPending(false)
            }
            ).catch(e => {
                setIsPending(false)
                setError(e.message)
            })


        return response


    }

    const getForInFunction = (response) => {
        const arrayAll = []
        for (const property in response) {
            arrayAll.push(`${response[property]}`);
        }
        return arrayAll
    }

    return (
        <>
            {error && <ErrorGet theme={theme}> {error}, try again late.</ErrorGet>}
            {isPending && <Loading />}
            {country &&
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
            }
        </>
    )
}

export { CountryInfo }
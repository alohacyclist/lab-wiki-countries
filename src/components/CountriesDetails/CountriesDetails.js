import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
/* import countries from '../../countries.json' */
import axios from 'axios'

export function CountriesDetails() {
    
    const { country_code } = useParams()
    const [countryDetails, setCountryDetails] = useState(null)

    console.log(country_code)

/*     useEffect(() => {
        const country = countries.find(oneCountry => oneCountry.alpha3Code === country_code)
        if(country) return setCountryDetails(country)
    }, [country_code]) */

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries/' + country_code)
            .then((response) => {
                setCountryDetails(response.data)
            })
    }, [country_code])

    return (
        <div>
   
            <div className="country_details_container">
            <h1 className="headline" >Country Details</h1>
                {!countryDetails && <h4>No country found!</h4>}

                {countryDetails && (
                    <div>
                    <img src={"https://flagpedia.net/data/flags/icon/72x54/" + countryDetails.alpha2Code.toLowerCase() + ".png"} alt="flag-icon"/>
                    <p>Capital: {countryDetails.name.common}</p>
                    <p>Area: {countryDetails.area} km²</p>
                    <p>Borders: 
                        <ul>
                            {countryDetails.borders.map(item => {
                            return(
                            <Link to={`/countries/${item}`}>
                                <li>{item}</li>
                            </Link>)
                            })}
                        </ul>
                    </p>
                    </div>
                )}

                <Link to={'/countries'}>Back to all countries</Link>
            </div>
            
        </div>
    )
}

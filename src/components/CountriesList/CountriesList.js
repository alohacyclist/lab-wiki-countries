import { useState, useEffect } from 'react'
/* import countries from '../../countries.json' */
import { Link } from 'react-router-dom'
import { Navbar } from '../'
import './CountriesList.css'
import axios from 'axios'

export function CountriesList() {

  const [countriesList, setCountriesList] = useState([])

/*   useEffect(() => {
    setCountriesList(countries)
  },[]) */
  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((response) => {
            setCountriesList(response.data)
        })
  }, [])

  return (
    <div>
      <Navbar />
      <h1 className="headline">List of countries</h1>

      <div className="countries_list_container">
      {countriesList.map(country => {

      return (
      <div className="country_container">
        
        <Link to={`details/${country.alpha3Code}`} props={country}>
          <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt="flag-icon"/>
          <p className="country_link">{country.name.common}</p>
        </Link>
      </div>
      )

      })}
      </div>
        

    </div>
  )
}

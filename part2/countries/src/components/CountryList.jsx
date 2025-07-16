import CountryDetails from "./CountryDetails"

const CountryList = ({countries}) => {
    if (countries.length > 10) {
      return <p>Too many matches, please specify another filter.</p>
    }
    
    if (countries.length > 1) {
      return (
        <ul>
          {countries.map(country => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      )
    }
    
    if (countries.length === 1) {
      const country = countries[0]
      return (
          <CountryDetails country={countries[0]} />
    )
    }
    
    return null;
}

export default CountryList;
  
import { useState, useEffect } from "react";
import countryService from './services/countries';

import CountryList from "./components/CountryList";

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (query) {
      countryService.getAll().then(data => {
        const filtered = data.filter(country => 
          country.name.common.toLowerCase().includes(query.toLowerCase())
        )
        const exactMatch = data.find(country => 
          country.name.common.toLowerCase() === query.toLowerCase()
        )
        if (exactMatch) {
          setCountries([exactMatch])
        } else {
          setCountries(filtered)
        }
      })
    } else {
      setCountries([])
    }
  }, [query])

  return (
    <>
      <h1>Find Countries</h1>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a country..."
      />

      <CountryList countries={countries} />
    </>
  )
}

export default App
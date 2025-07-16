import { useState } from "react";
import CountryDetails from "./CountryDetails";

function CountryList({ countries }) {
    const [selectedCountry, setSelectedCountry] = useState(null);

    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    return (
        <div>
            <ul>
                {countries.map(country => (
                    <li key={country.cca3}>
                        {country.name.common}{' '}
                        <button onClick={() =>
                            selectedCountry?.cca3 === country.cca3
                                ? setSelectedCountry(null)
                                : setSelectedCountry(country)}>
                            {selectedCountry?.cca3 === country.cca3 ? 'Hide' : 'Show'}
                        </button>
                    </li>
                ))}
            </ul>

            {selectedCountry && (
                <CountryDetails country={selectedCountry} />
            )}
        </div>
    )
}

export default CountryList;
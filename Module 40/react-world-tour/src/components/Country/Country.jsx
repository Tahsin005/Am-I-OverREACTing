import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => {
        handleVisitedCountry(country);
    }

    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small><strong>Code: {cca3}</strong></small></p>
            <button onClick={passWithParams}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(flags.png)}>Add Flag</button>
            <p>{visited && 'I have visited this country'}</p>
            <button onClick={handleVisited}>Visited</button>
            <hr />
            <CountryDetail country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></CountryDetail>
        </div>
    );
};

export default Country;
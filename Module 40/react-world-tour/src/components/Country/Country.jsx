import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small><strong>Code: {cca3}</strong></small></p>
            <button onClick={() => handleVisitedCountry(name.common)}>Mark Visited</button>
            <p>{visited && 'I have visited this country'}</p>
            <button onClick={handleVisited}>Visited</button>
        </div>
    );
};

export default Country;
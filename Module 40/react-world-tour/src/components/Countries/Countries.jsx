import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    }, []);

    const handleVisitedCountry = (country) => {
        console.log('Add this to your country');
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const handleVisitedFlags = (flag) => {
        console.log("Flag Visited");
        setVisitedFlags([...visitedFlags, flag]);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h4>Visted Countries {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => (
                            <li key={country.cca3}>{country.name.common}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="flag-container">
                {/* <h4>Visted Flags {visitedFlags.length}</h4> */}
                {
                    visitedFlags.map((flag, idx) => (
                        <img key={idx} src={flag} alt="" />
                    ))
                }
            </div> 
            {/* all countries */}
            <div className="country-container">
                {
                    countries.map(country => (
                        <Country key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></Country>
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;
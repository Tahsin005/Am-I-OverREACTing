import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    return (
        <div>
            <h4>Country detail</h4>
            <hr />
            {/* <CountryData country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;
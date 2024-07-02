
const CountryData = (props) => {
    return (
        <div>
            <h4>Country data</h4>
            <p>{props.country.name.common}</p>
        </div>
    );
};

export default CountryData;
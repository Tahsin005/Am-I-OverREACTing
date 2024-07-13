import PropTypes from 'prop-types';
const CountryCard = ({ country }) => {
  return (
    <div className="inline-block rounded-lg overflow-hidden pb-6 shadow-[0_0_8px_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out bg-[var(--elements-color)]">
      <div className='h-[160px] overflow-hidden'>
        <img className="border-b-2 w-full h-full object-cover" src={country.flags.svg} alt="" />
      </div>
      <div className="">
        <h3 className="text-xl font-bold my-2">{country.name.common}</h3>
        <p>
            <strong>Population:</strong> {country.population.toLocaleString('en-IN')}
        </p>
        <p className="flex-grow">
            <strong>Region:</strong> {country.region}
        </p>
        <p>
            <strong>Capital:</strong> {country.capital?.[0]}
        </p>
      </div>
    </div>
  );
};
CountryCard.propTypes = {
    country: PropTypes.object
}
export default CountryCard;

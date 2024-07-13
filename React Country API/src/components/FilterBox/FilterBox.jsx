const FilterBox = ({ setQuery }) => {
  return (
    <div className="w-64 border-2 rounded-lg">
      <select className="mt-3" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}>
        <option hidden >Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterBox;

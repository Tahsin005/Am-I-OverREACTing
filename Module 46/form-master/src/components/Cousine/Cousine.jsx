import PropTypes from 'prop-types'
const Cousine = ({name}) => {
    return (
        <div>
            <h3>Cousine</h3>
            <h4>{name}</h4>
        </div>
    );
};
Cousine.propTypes = {
    name: PropTypes.string,
}

export default Cousine;
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';
const Cousine = ({name}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h3>Cousine</h3>
            <h4>{name}---{gift}</h4>
        </div>
    );
};
Cousine.propTypes = {
    name: PropTypes.string,
}

export default Cousine;
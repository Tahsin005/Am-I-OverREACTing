import PropTypes from 'prop-types';
import { FaRegHandPointRight } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'><FaRegHandPointRight className='text-green-500'/> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string.isRequired,
 
}
export default Feature;
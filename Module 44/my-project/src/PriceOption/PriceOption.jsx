import PropTypes from 'prop-types';
import Feature from '../components/Feature/Feature';
const PriceOption = ({option}) => {
    const {id, name, features, price} = option;
    return (
        <div key={id} className='bg-blue-700 text-white p-6 rounded-xl flex flex-col'>
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h1 className='text-3xl text-center my-8 '>{name}</h1>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => (
                        <Feature key={idx} feature={feature}></Feature>
                    ))
                }
            </div>
            <button className='mt-12 w-full font-bold bg-green-500 py-2 rounded-md hover:bg-blue-600 hover:text-black'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
}

export default PriceOption;
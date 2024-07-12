import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const { id, name, email, username, phone} = user;
    return (
        <div className="border-4 p-6 rounded-lg border-lime-500 flex flex-col">
            <h1 className='text-2xl font-semibold'>{id}: {name}</h1>
            <p className='text-lg font-semibold'>Email: {email}</p>
            <p className='font-extrabold'>@{username}</p>
            <p className='flex-grow'>{phone}</p>
            <Link to={`/user/${id}`}>
                <button className='bg-lime-500 p-2 rounded-lg mt-3 w-full'>Show Details</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}
export default User;
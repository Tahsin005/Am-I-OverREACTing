import PropTypes from 'prop-types';
const User = ({user}) => {
    const { id, name, email, username} = user;
    return (
        <div className="border-4 p-6 rounded-lg border-lime-500">
            <h1 className='text-2xl font-semibold'>{id}: {name}</h1>
            <p className='text-lg font-semibold'>Email: {email}</p>
            <p className='font-extrabold'>@{username}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}
export default User;
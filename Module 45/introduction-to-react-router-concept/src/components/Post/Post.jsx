import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {userId, id, title} = post;

    return (
        <div className="border-4 rounded-xl p-4 flex flex-col"> 
            <h1 className="text-center font-semibold">{title}</h1>
            
            <p className="text-center flex-grow">Author: {userId}</p>
            <Link to={`/post/${id}`}><button className='bg-lime-500 w-full p-2 rounded-xl mt-2'>Show Details</button></Link>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object.isRequired, 
 
}
export default Post;
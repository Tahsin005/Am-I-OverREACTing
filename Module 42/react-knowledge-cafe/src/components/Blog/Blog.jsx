import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";
const Blog = ({blog, handleAddToBookmark, handleTimeOnRead}) => {
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="my-20 ms-3">
            
            <img className='w-full' src={cover} alt={title} />
            <div className='flex justify-between mt-4'>
                <div className='flex'>
                    <img className='w-14 border-8 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='text-xl'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl'><CiBookmarkPlus/></button>
                </div>
            </div>
            <h2 className='text-2xl font-semibold mt-4'>{title}</h2>
            <p className='mt-4'>
                {
                    hashtags.map((hash, index) => <span className='text-gray-600' key={index}>#{hash}  </span>)
                }
            </p>
            <button onClick={() => handleTimeOnRead(reading_time, id)}>
            <p className='py-3'>Mark Read</p>
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleTimeOnRead: PropTypes.func.isRequired,
}

export default Blog;
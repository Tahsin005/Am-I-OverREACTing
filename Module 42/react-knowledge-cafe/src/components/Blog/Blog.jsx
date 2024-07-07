import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="p-4 text-xl border border-gray-700 m-4 rounded-xl">
            
            <img className='bg-cover' src={cover} alt={title} />
            <div className='flex justify-between mt-4'>
                <div className='flex'>
                    <img className='w-14 border-8 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-2xl font-semibold mt-4'>{title}</h2>
            <p className='mt-4'>
                {
                    hashtags.map((hash, index) => <span className='text-gray-600' key={index}>#{hash}  </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;
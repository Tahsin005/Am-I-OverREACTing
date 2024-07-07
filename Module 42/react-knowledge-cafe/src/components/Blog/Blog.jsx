import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    return (
        <div className="p-4 text-xl">
            {blog.title}
            <img src={blog.cover} alt="" />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;
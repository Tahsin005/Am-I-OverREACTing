import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
// import Blog from './../Blog/Blog';

const Blogs = ({handleAddToBookmark, handleTimeOnRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    }, []);
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => (
                    <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} 
                    handleTimeOnRead={handleTimeOnRead}
                    ></Blog>
                ))
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleTimeOnRead: PropTypes.func.isRequired,
}
export default Blogs;
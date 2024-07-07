
const Blog = ({blog}) => {
    return (
        <div>
            {blog.title}
            <img src={blog.cover} alt="" />
            <img src={blog.author_img} alt="" />
        </div>
    );
};

export default Blog;
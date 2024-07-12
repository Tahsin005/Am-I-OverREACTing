import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-3xl my-12 font-semibold">Posts: {posts.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    posts.map((post) => (<Post key={post.id} post={post}></Post>))
                }
            </div>
        </div>
    );
};

export default Posts;
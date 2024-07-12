import { useId } from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {userId, id, title, body} = post;
    return (
        <div>
            <p className="text-3xl font-bold text-center my-12">Posted By: {userId}</p>
            <p className="italic text-4xl font-semibold p-6 text-center">{title}</p>
            <p className="text-center text-3xl flex-grow text-lime-700 p-6">Description: <small>{body}</small></p>
        </div>
    );
};

export default PostDetails;
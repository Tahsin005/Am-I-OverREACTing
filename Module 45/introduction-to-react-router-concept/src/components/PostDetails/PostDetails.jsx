import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const {userId, title, body} = post;
    const naviagate = useNavigate();
    
    console.log(postId);

    const handleGoBack = () => {
        naviagate(-1); // Go back one step in the history.
    }
    return (
        <div className="px-12">
            <p className="text-3xl font-bold text-center my-12">Posted By: {postId}</p>
            <p className="italic text-4xl font-semibold p-6 text-center">{title}</p>
            <p className="text-center text-3xl flex-grow text-lime-700 p-6">Description: <small>{body}</small></p>
            <button onClick={handleGoBack} className="w-full bg-lime-500 p-2 rounded-xl">Go Back</button>
        </div>   
    );
};

export default PostDetails;
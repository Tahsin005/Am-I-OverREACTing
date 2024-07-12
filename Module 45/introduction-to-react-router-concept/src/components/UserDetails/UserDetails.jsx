import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, email, website} = user;
    return (
        <div className="ps-12 place-items-center">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;
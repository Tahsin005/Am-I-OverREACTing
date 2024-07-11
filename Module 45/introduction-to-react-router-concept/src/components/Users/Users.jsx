import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData();
    return (
        <div className="gap-y-6 flex flex-col items-center justify-center mt-12 p-6">
            <h1 className="text-3xl font-bold">Our  Vodro users: {users.length}</h1>            
            <p className="text-2xl">Here is a list of our Vodro users...</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    users.map((user, idx) => (
                        <User key={idx + 1} user={user}></User>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;
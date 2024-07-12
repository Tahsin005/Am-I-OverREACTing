import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleError = () => {
        navigate("/");
    }
    return (
        <div className="px-32">
            <h1 className="text-center font-bold text-7xl mt-32">Oopss</h1>
            <p className="text-center font-bold text-3xl mt-32"><i>{error.statusText || error.message}</i></p>
            {
                error.status == 404 && <div>
                    <button onClick={handleError} className="text-center w-full my-12 bg-red-500 py-2 rounded-xl">Go Back Home!</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
import useWindowSize from "../../Hooks/useWindowSize";
const WindowSize = () => {
    const { width, height} = useWindowSize();
    return (
        <div>
            <h1>Widow Size Now...</h1>
            <h3>Width: {width}</h3>
            <h3>Height: {height}</h3>
        </div>
    );
};

export default WindowSize;
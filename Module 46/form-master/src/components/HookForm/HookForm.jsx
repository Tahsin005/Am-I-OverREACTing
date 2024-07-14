import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rojoni')
    const emailInput = useInputState();
    const handleSubmit = e => {
        e.preventDefault();
        // console.log("Form submission ", name);
        console.log("Form submission ", emailInput.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailInput} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default HookForm;
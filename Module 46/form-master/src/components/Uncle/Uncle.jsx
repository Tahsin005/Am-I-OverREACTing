import Cousine from "../Cousine/Cousine";

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousine name={'Hasan'}></Cousine>
                <Cousine name={'Meem'}></Cousine>
            </section>
        </div>
    );
};

export default Uncle;
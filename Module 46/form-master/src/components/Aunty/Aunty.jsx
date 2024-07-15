import { useContext } from "react";
import Cousine from "../Cousine/Cousine";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousine name={'Meem'}></Cousine>
                <Cousine name={'Meem'}></Cousine>
            </section>
            <section className="flex">
                <h5>{money}</h5>
                <button onClick={() => setMoney(money + 1000)}>Add money la</button>
            </section>
        </div>
    );
};

export default Aunty;
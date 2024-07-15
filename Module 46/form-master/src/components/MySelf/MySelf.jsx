import Special from "../Special/Special";

const MySelf = ({asset}) => {
    return (
        <div>
            <h3>MySelf</h3>            
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;
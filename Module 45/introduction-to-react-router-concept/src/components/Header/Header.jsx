
const Header = () => {
    return (
        <div>
            <h1 className="text-7xl font-semibold">This is header</h1>
            <div className="gap-x-10 flex py-10">
                <a className="text-3xl hover:bg-slate-400" href="/">Home</a>
                <a className="text-3xl hover:bg-slate-400" href="/about">About</a>
                <a className="text-3xl hover:bg-slate-400" href="/contact">Contact</a>
                
            </div>            
        </div>
    );
};

export default Header;
import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch, setSearchResult, updateMovieList }) => {
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = async () => {
        if (search === '')
            alert('Dear user, please enter a valid search');
        else {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${search}`;
            const res = await fetch(url);
            const data = await res.json();
            updateMovieList(data.results);
            setSearchResult(search);
            setSearch('');
        }
    }

    const backToHome = async () => {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=0ac744b371eb333af847f3f201fda626&language=en-US&page=1`;
        let res = await fetch(url);
        let data = await res.json();
        updateMovieList(data.results);
        setSearchResult('');
    }

    return (
        <nav>
            <div className="flex items-center bg-[#032541] h-16">
                <Link to="/" onClick={backToHome} className="font-sans font-bold text-transparent bg-clip-text text-3xl bg-gradient-to-r from-green-300 to-blue-500 ml-8 md:ml-14">MovieGeek</Link>
                <img
                    className="w-12 ml-2"
                    src="https://cdn-icons-png.flaticon.com/512/2798/2798007.png"
                    alt="logo" />
            </div>
            <div className="h-72 text-white font-sans bg-gradient-to-r from-green-400 to-blue-700 ">
                <h2 className="text-5xl font-bold pl-8 md:pl-14 pt-12">Welcome.</h2>
                <h3 className="text-2xl font-semibold pl-8 md:pl-14 pt-2">Millions of movies to discover. Explore now.</h3>
                <input className="w-[15em] md:w-[68em] ml-8 md:ml-14 mt-8 md:mt-12 px-4 py-3 rounded-l-full text-black outline-none shadow-2xl shadow-black" type="text" placeholder="Search for a movie......" value={search} onChange={handleChange} />
                <button className="w-[6em] md:w-[9em] px-4 py-3 rounded-r-full bg-[#032541] shadow-2xl shadow-black" onClick={() => handleClick(search)}>Search</button>
            </div>
        </nav>
    )
}

export default Navbar;
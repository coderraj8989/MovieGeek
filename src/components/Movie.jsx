import { Link } from "react-router-dom";

const Movie = ({ img, title, releaseDate, overview, lang, voteCount, voteAvg, popularity, setInfo }) => {

    const handleClick = () => {
        const obj={
            img:img,
            title:title,
            releaseDate:releaseDate,
            overview:overview,
            lang:lang,
            voteCount:voteCount,
            voteAvg:voteAvg,
            popularity:popularity
        }
        setInfo(obj);
        document.documentElement.scrollTop=0;
    }

    return (
        <Link to="/details" className="mx-5 my-3 w-36 h-72 p-1 flex flex-col justify-center items-center break-normal hover:scale-110 duration-[1s] shadow-2xl shadow-black rounded-xl" onClick={handleClick}>
            <img src={img} alt="poster" className="w-36 h-52 mx-auto rounded-lg" />
            <h3 className="py-1 text-sm font-light">{title}</h3>
        </Link>
    )
}

export default Movie;


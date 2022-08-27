import { Link } from "react-router-dom";

const Details = ({ info }) => {
    return (
        <div className="p-5 flex flex-col md:flex-row">
            <img src={info.img} alt="poster" className="w-max h-max md:w-[20em] md:h-[30em] rounded-2xl" />
            <div className="flex flex-col justify-start m-1">
                <h1 className="font-sans font-normal text-2xl md:text-5xl p-1">{info.title}</h1>
                <p className="font-sans font-light text-md md:text-xl p-1">
                    <span className="font-normal">Release Date:&nbsp;</span>
                    <span>{info.releaseDate}</span>
                </p>
                <p className="flex font-sans font-light text-md md:text-xl p-1">
                    <span className="font-normal">Overview:&nbsp;</span>
                    <span>{info.overview}</span>
                </p>
                <p className="font-sans font-light text-md md:text-xl p-1">
                    <span className="font-normal">Vote Count:&nbsp;</span>
                    <span>{info.voteCount}</span>
                </p>
                <p className="font-sans font-light text-md md:text-xl p-1">
                    <span className="font-normal">Vote Average:&nbsp;</span>
                    <span>{info.voteAvg}</span>
                </p>
                <p className="font-sans font-light text-md md:text-xl p-1">
                    <span className="font-normal">Popularity:&nbsp;</span>
                    <span>{info.popularity}</span>
                </p>
                <Link className="ml-auto mr-1 mt-auto mb-1" to="/">
                    <button className="px-5 py-2 text-white font-light bg-[#032541] rounded-lg">{'<'}&nbsp;Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Details;
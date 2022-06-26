import Movie from "./Movie";

const MovieList = ({ movieList, page, setPage, searchResult, setInfo }) => {

    const handleNext = () => {
        if (page < movieList.length) {
            setPage(page + 1);
            document.documentElement.scrollTop = 0;
        }
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
            document.documentElement.scrollTop = 0;
        }
    }

    return (
        <>
            <div>
                {searchResult === '' && <h2 className='text-normal text-2xl font-sans ml-8 md:ml-14 mt-5'>What's Popular!</h2>}
                {searchResult && <h2 className='text-normal text-2xl font-sans ml-8 md:ml-14 mt-5'>Search results for "{searchResult}"</h2>}
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {movieList.map((obj) => {
                    return (
                        <div key={obj.id}>
                            <Movie
                                img={`https://image.tmdb.org/t/p/original${obj.poster_path === null || obj.poster_path=== undefined ? `/or06FN3Dka5tukK1e9sl16pB3iy.jpg` : obj.poster_path}`}
                                title={obj.title}
                                releaseDate={obj.release_date}
                                overview={obj.overview}
                                lang={obj.original_language}
                                voteCount={obj.vote_count}
                                voteAvg={obj.vote_average}
                                popularity={obj.popularity}
                                setInfo={setInfo} />
                        </div>
                    )
                })}
            </div>
            {searchResult === '' &&
                <div className='flex justify-between items-center w-[100%] my-2 py-4 mx-auto text-white text-lg font-light font-sans'>
                    <button className='ml-8 md:ml-14 px-10 md:px-16 py-2 bg-[#032541] rounded-full' onClick={handlePrev}>Prev</button>
                    <button className='mr-8 md:mr-14 px-10 md:px-16 py-2 bg-[#032541] rounded-full' onClick={handleNext}>Next</button>
                </div>}
        </>
    )
}

export default MovieList;

const Footer = () => {
    return (
        <div className='w-[100%] py-5 bg-[#032541] text-white text-lg font-light'>
            <div className="flex justify-center items-center">
                <div className="font-sans font-bold text-transparent bg-clip-text text-3xl bg-gradient-to-r from-green-300 to-blue-500 ml-4 md:ml-8">
                    <h1>Movie</h1>
                    <h1>Geek</h1>
                </div>
                <img
                    className="w-20 ml-2"
                    src="https://cdn-icons-png.flaticon.com/512/2798/2798007.png"
                    alt="logo" />
                <div className="flex flex-col ml-4">
                    <p>Made with 💙 by RitikRajOfficial!</p>
                    <p>Copyright&copy;2022-2023. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
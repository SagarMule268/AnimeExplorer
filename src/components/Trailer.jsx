import React from 'react'

const Trailer = ({ trailer, anime, theme , closeTrailer}) => {

    return (
        <div className='trailer container m-15   '>
            {

                trailer && (
                    <div >
                        <button
                            onClick={closeTrailer}
                          className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-black text-white border-2 border-white' : 'bg-white text-black border-2 border-black !important'}`}

                        ><i className='fa fa-times'></i></button>
                        <iframe
                            src={anime.trailer.embed_url}
                            frameBorder="0"
                            className="w-full h-[60vh] md:h-[80vh] mt-4"
                            allowFullScreen
                            autoPlay
                        ></iframe>
                    </div>

                )}
        </div>

    )
}

export default Trailer

import React from 'react'

const Trailer = ({  anime, closeTrailer}) => {

    return (
        <div className='trailer container m-15   '>
            {

                
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
  <div className="relative w-full max-w-4xl p-4">
    <button
      onClick={closeTrailer}
      className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-lg hover:bg-gray-200"
    >
      ✕
    </button>
    <iframe
      src={anime.trailer.embed_url}
      frameBorder="0"
      className="w-full h-[60vh] md:h-[80vh] rounded-lg shadow-lg"
      allowFullScreen
    ></iframe>
  </div>
</div>


                }
        </div>

    )
}

export default Trailer

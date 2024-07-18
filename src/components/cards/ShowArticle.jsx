import React, { useState } from 'react'
import ModalContainer from '../Modals/ModalContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const ShowArticle = ({ data, onClose }) => {
    const [src, setSrc] = useState(data.urlToImage);

    const handleError = () => {
        setSrc('/images/default-image.webp');
    };

    return (
        <ModalContainer className={`sm:w-[60%]`} onClose={onClose}>
            <div className="p-4">
                <h2 className="text-xl text-center font-semibold mb-2 text-black p-2">{data.title}</h2>
                <div className="flex justify-center">
                    <img
                        src={src}
                        alt={data.title}
                        className="max-w-full w-46 h-46 sm:h-80 rounded-lg shadow-lg bg-cover"
                        onError={handleError}
                    />
                </div>
                <p className="text-gray-700 text-sm mt-4 mb-6">{data.description}</p>

                <div className="flex justify-between items-center">
                    <a href={data.url} target="_blank" className="text-blue-600 text-sm font-semibold flex items-center">
                        Go to site <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-1" />
                    </a>

                    <div className="text-gray-600 text-sm p-2">
                        <p>Publicado por <span className="font-bold">{data.author}</span></p>
                        <p className="text-center bg-gray-600 bg-opacity-50 rounded-lg px-3 py-1 mt-1">{new Date(data.publishedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>

        </ModalContainer>
    )
}

export default ShowArticle

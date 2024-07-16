import React from 'react'
import ModalContainer from '../Modals/ModalContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const ShowArticle = ({ data, onClose }) => {
    return (
        <ModalContainer onClose={onClose}>
            <div className="px-4">
                <h2 className="text-xl font-bold mb-2 text-black">{data.title}</h2>
                <div className="flex justify-center">
                    <img src={data.urlToImage} alt={data.title} className="max-w-full h-46 sm:h-80 rounded-lg shadow-lg" />
                </div>

                <p className="text-gray-700 text-sm mt-4 mb-6">{data.description}</p>

                <div className="flex justify-between items-center">
                    <a href={data.url} target="_blank" className="text-blue-600 text-sm font-semibold flex items-center">
                        Go to site <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-1" />
                    </a>

                    <div className="text-gray-600 text-sm p-2">
                        <p>Publicado por {data.author}</p>
                        <p className="text-center bg-gray-600 bg-opacity-50 rounded-lg px-3 py-1 mt-1">{new Date(data.publishedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>

        </ModalContainer>
    )
}

export default ShowArticle

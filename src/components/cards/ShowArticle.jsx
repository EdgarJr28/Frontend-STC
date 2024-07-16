import React from 'react'
import ModalContainer from '../Modals/ModalContainer'

const ShowArticle = ({ data, onClose }) => {
    return (
        <ModalContainer onClose={onClose}>
            <div className="px-4">
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                <div className="flex justify-center">
                    <img src={data.urlToImage} alt={data.title} className="max-w-full h-80 rounded-lg shadow-lg" />
                </div>
                <p className="text-gray-700 w-[80%] mx-auto m-4 p-10">{data.description}</p>
                <div className="absolute bottom-0 right-0 m-4">
                    <div className="flex items-center mt-1">
                        <p className="text-gray-600 text-sm font-semibold">Publicado por {data.author} &nbsp;</p>
                        <p className="bg-gray-600 bg-opacity-50 text-gray-700 rounded-lg px-3 py-1 text-sm">{new Date(data.publishedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </ModalContainer>
    )
}

export default ShowArticle

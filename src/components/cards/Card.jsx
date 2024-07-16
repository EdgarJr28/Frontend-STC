import React from 'react'

const Card = ({ title, img, author, description, onClick }) => {
    return (
        <a onClick={onClick}>
            <div className="max-w-96 sm:max-w-[613px] mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 border-2 border-gray-200">
                <div className="flex items-center px-8 p-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-xl flex-shrink-0">
                        <img src={img} alt="Article" className="object-cover w-full h-full rounded-xl" />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="text-gray-600">{author}</p>
                        <p className="text-gray-700 mt-2">{description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}
export default Card

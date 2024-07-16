import React from 'react'

const Card = ({ title, img, author, description, onClick }) => {
    return (
        <a onClick={onClick}>
            <div className="max-w-96 sm:max-w-[613px] mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 border-2 border-gray-200 p-4">
                <div className="flex flex-col sm:flex-row items-center px-4 sm:p-4 cursor-pointer">
                    <div className="w-24 h-24 bg-gray-200 rounded-xl flex-shrink-0 mb-4 sm:mb-0">
                        <img src={img} alt="Article" className="object-cover w-full h-full rounded-xl" />
                    </div>
                    <div className="sm:ml-4 text-center sm:text-left">
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

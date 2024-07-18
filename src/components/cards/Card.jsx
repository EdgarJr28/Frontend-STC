import React, { useState } from 'react'

const Card = ({ title, img, author, description, onClick }) => {
    const [src, setSrc] = useState(img);

    const handleError = () => {
        setSrc('/images/default-image.webp');
    };
    return (

        <div className="max-w-full sm:max-w-[640px] sm:max-h-80 mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 border-2 border-gray-200 p-4  transition duration-300 ease-in-out transform">
            <a onClick={onClick}>
                <div className="flex sm:flex-row items-center sm:p-4 cursor-pointer">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-xl flex-shrink-0 sm:mb-0">
                        <img
                            src={src}
                            alt="Article"
                            className="object-cover w-full h-full rounded-xl"
                            onError={handleError}
                        />
                    </div>
                    <div className="flex-col pl-4 p-2">
                        <h2 className="w-full text-xs text-wrap md:text-lg font-bold">{title}</h2>
                        <p className="text-gray-600 text-xs font-medium">{author}</p>
                        <p className="text-gray-700 mt-2 text-xs text-wrap">{description}</p>
                    </div>
                </div>
            </a>
        </div >

    )
}
export default Card
/* 
<div class="bg-white rounded-lg shadow-md overflow-hidden flex mb-4 cursor-pointer
                 transition duration-300 ease-in-out transform hover:bg-gray-50 hover:shadow-lg
                 relative"><div class="w-1/4 bg-gray-200 min-w-28 p-2 flex justify-center items-center "><div class="w-full h-auto aspect-square rounded-md overflow-hidden "><img src="https://netforemost.com/wp-content/uploads/our-services-versatec.png" alt="NetForemost" class="w-full h-full object-cover"></div></div><div class="w-3/4 p-4"><h2 class="text-sm font-bold mb-1">NetForemost</h2><p class="text-xs text-gray-600 mb-2">Isaí Hernández</p><p class="text-xs text-gray-700 mb-2 line-clamp-2">At Netforemost, we assemble a high-performing team of engineers, and guide them along the software development life cycle of your project.</p><div class="flex justify-between items-center"><button class="text-blue-500 hover:text-blue-700 text-sm transition duration-300 ease-in-out">Read more</button></div></div></div>
*/
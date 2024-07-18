import React, { useEffect, useState } from 'react'
import SkeletonLoaderCard from './SkeletonLoaderCard';

const Card = ({ title, img, author, description, onClick }) => {
    const [src, setSrc] = useState(img);
    const [isLoading, setIsLoading] = useState(true);

    const handleError = () => {
        setSrc('/images/default-image.webp');
    };

    const truncateString = (str, num) => {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...'; // Agregamos '...' al final si se recorta
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulamos una carga de 2 segundos

        return () => clearTimeout(timer);
    }, []);

    return (

        <>
            {isLoading ? (
                <SkeletonLoaderCard />
            ) : (
                <div className="max-w-full sm:max-w-[640px] sm:max-h-80 mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 border-2 border-gray-200 p-4 transition duration-300 ease-in-out transform">
                    <a onClick={onClick}>
                        <div className="flex sm:flex-row items-center sm:p-4 cursor-pointer">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-xl flex-shrink-0 sm:mb-0">
                                <img
                                    src={src}
                                    alt={title}
                                    className="object-cover w-full h-full rounded-xl"
                                    onError={handleError}
                                />
                            </div>
                            <div className="flex-col pl-4 p-2">
                                <h2 className="w-full text-xs text-wrap md:text-lg font-bold">{title}</h2>
                                <p className="text-gray-600 text-xs font-medium">{author}</p>
                                <p className="text-gray-700 mt-2 text-xs text-wrap">
                                    {truncateString(description, 160)}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            )}
        </>

    )
}
export default Card
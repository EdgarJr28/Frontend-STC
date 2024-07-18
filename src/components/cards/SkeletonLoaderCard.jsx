import React from 'react';

// Componente SkeletonLoader
const SkeletonLoaderCard = () => {
    return (
        <div className="max-w-full sm:max-w-[640px] sm:max-h-80 mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 border-2 border-gray-200 p-4 transition duration-300 ease-in-out transform">
            <div className="flex sm:flex-row items-center sm:p-4 cursor-pointer animate-pulse">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-xl flex-shrink-0"></div>
                <div className="w-full flex flex-col pl-4 space-y-4">
                    <div className="w-full h-4 bg-gray-300 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                    <div className="w-full h-2 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoaderCard;
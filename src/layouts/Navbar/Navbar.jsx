import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h2 className="text-xl font-medium text-baseBlack dark:text-white transition-all duration-700">
                            <FontAwesomeIcon icon={faConnectdevelop} width={30} height={30} className="mr-1 hover:animate-spin transition-all duration-300" />
                            EdDev
                        </h2>
                    </div>
                    {/* Aquí puedes agregar los otros elementos del navbar */}
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

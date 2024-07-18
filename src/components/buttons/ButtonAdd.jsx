import React from 'react'

const ButtonAdd = ({ text, onClick }) => {
    return (
        <div className="flex">
            <button onClick={onClick}
                className="p-2 rounded-lg bg-transparent cursor-pointer
             focus:outline-none hover:border-black flex items-center text-baseGray hover:text-black
             space-x-2 shadow-2xl border border-gray-150 hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <span className=" text-sm">{text}</span>
                <img className="rounded-full object-cover h-4 w-4" src="./images/add-button.png" alt="Agregar" />
            </button>
        </div>
    )
}

export default ButtonAdd

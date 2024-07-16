export default function PopUp({ onClose, message, status }) {

    return (

        <div className="p-7">
            <div className=" fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white bg-baseBlack p-8 rounded-xl shadow-white shadow-sm">
                    <button onClick={onClose} className="ml-48"><img className={'mx-auto hover:animate-spin'} src={"/svg/close.svg"} width={25} height={25} /></button>
                    <div className="bg-baseBlack/20 border-t m-1 mb-4 divide-black" >
                    </div>
                    {status ? (
                        <p className="text-green-500 text-sm text-center mb-4">{message}</p>
                    ) : (
                        <p className="text-red-500 text-sm text-center mb-4">{message}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
import { useEffect } from 'react';

const ModalContainer = ({ children, className, onClose }) => {
  // Función para manejar el clic fuera del modal
  const handleOutsideClick = (e) => {
    if (!e.target.closest('.modal-content')) {
      onClose(); // Cerrar el modal
    }
  };

  // Función para manejar el evento de teclado
  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
    document.body.classList.add('body-scroll-lock');

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.classList.remove('body-scroll-lock');
    };
  }, []);

  return (
    <div className={`fixed p-0 justify-center flex items-center h-screen top-0 bottom-0 mdsm:p-6 w-full bg-opacity-50 bg-black z-50 backdrop-blur-sm dark:text-white`}>
      <div className={`${className} bg-white dark:bg-dark-100 sm:p-5 m-5 pb-0 relative rounded modal-content`}>
        <button onClick={onClose} className="absolute right-3 top-3 ">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalContainer;

import React, { useEffect, useState } from 'react';
import Card from '../../components/cards/Card';
import { getArticles } from '../../services/api.service';
import ShowArticle from '../../components/cards/ShowArticle';
import ButtonAdd from '../../components/buttons/ButtonAdd';
import NewArticle from '../../components/cards/NewArticle';
import { useCtx } from '../../context/context';

const Home = () => {
    const { articles } = useCtx();
    const [searchTerm, setSearchTerm] = useState('');
    const [showArticle, setShowArticle] = useState({ show: false, data: {} });
    const [showNewArticle, setShowNewArticle] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // funcion para filtrar artículos por título o autor según el término de búsqueda.
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // estado {true} del modal para ver el articulo
    const handleShowArticle = (article) => {
        setShowArticle({ show: true, data: article });
    }

    //estado {false} del modal para cerrar y limpiar el articulo del modal
    const handleCloseArticle = () => {
        setShowArticle({ show: false, data: {} });
    }

    //funcion para agregar un nuevo articulo se necesita el token de autenticación en los envairments
    const handleNewArticleModal = () => {
        setShowNewArticle(!showNewArticle);
    };

    return (
        <div className='min-h-screen bg-gray-100'>
            <ButtonAdd text={`Add Article`} onClick={handleNewArticleModal} />
            <div className="flex justify-center py-4">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    className="w-96 p-2 border border-gray-300 rounded-md shadow-sm"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="bg-gray-100 h-screen p-4 overflow-y-auto">
                {filteredArticles.length > 0 ? (

                    filteredArticles.map((article, index) => (
                        <Card
                            key={index}
                            img={article.urlToImage}
                            title={article.title}
                            author={article.author}
                            description={article.description}
                            onClick={() => handleShowArticle(article)}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No results found.</p>
                )}
            </div>
            {showArticle.show && (
                <ShowArticle data={showArticle.data} onClose={handleCloseArticle} />
            )}
            {
                showNewArticle && (
                    <NewArticle onClose={() => { setShowNewArticle(!showNewArticle) }} />  // componente para agregar un nuevo articulo
                )
            }
        </div>
    );
};

export default Home;

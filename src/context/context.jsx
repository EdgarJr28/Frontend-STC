import { createContext, useState, useContext, useEffect } from "react";
import { getArticles } from "../services/api.service";



const Context = createContext("");
export const useCtx = () => useContext(Context);

/* 
Context es una hook propio de react para manejar el comportamiento de variales y componentes
en un entorno local.
*/
export function CtxProvider({ children }) {

    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        try {
            const articlesData = await getArticles();
            setArticles(articlesData);
        } catch (error) {
            console.error('Error fetching articles: ', error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    /* Devuelve componente de los hooks implementados en el context*/
    return (
        <Context.Provider value={{
            articles, setArticles,
            fetchArticles
        }}>
            {children}
        </Context.Provider>
    );
};
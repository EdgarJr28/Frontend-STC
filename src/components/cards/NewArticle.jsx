import React, { useState } from 'react'
import ModalContainer from '../Modals/ModalContainer'
import InputWithLabel from '../inputs/InputWithLabel'
import Button from '../buttons/Button'
import { newArticles } from '../../services/api.service'
import PopUp from '../PopUps/PopUp'
import { useCtx } from '../../context/context'

const NewArticle = ({ onClick, onClose }) => {
    const { fetchArticles } = useCtx();
    const [error, setError] = useState(null);
    const [PopUpStatus, setPopUpStatus] = useState()
    const [propsPopUp, setPropsPopUp] = useState({
        status: false,
        message: ''
    })
    const [formArticle, setFormArticle] = useState({
        title: '',
        author: '',
        description: '',
        url: '',
        urlToImage: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setFormArticle({ ...formArticle, [name]: value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let articleData = {
                title: formArticle.title,
                author: formArticle.author,
                description: formArticle.description,
                url: formArticle.url,
                urlToImage: formArticle.urlToImage,
                publishedAt: new Date().toISOString()
            }
            if (formArticle.title === "" || formArticle.author === "" || formArticle.description === "" || formArticle.url === "" || formArticle.urlToImage === "") {
                setError({ message: 'All fields are required' })
                return;
            }
            const newArticle = await newArticles(articleData);
            if (newArticle) {
                setFormArticle({ title: '', author: '', description: '', url: '', urlToImage: '' })
                setPopUpStatus(true);
                setPropsPopUp({ status: true, message: 'Article successfully registered.' })
                setTimeout(() => {
                    setPopUpStatus(false)
                }, 4000);
                await fetchArticles();
            }
        } catch (e) {
            setError({ message: e.message })
        }
    }

    const handleCloseModal = () => {
        setPopUpStatus(null);
    };

    return (
        <ModalContainer className={`w-[420px]`} onClose={onClose}>
            <div className='w-full h-full m-auto mt-2 rounded-lg mb-2'>
                <form className='p-5 rounded-lg overflow-y-auto' onSubmit={handleSubmit}>
                    <p className='font-medium text-center text-black m-2'>New Article</p>
                    {error?.message &&
                        <p className=" m-2 mx-1 text-center text-red-500 text-xs md:text-sm whitespace-nowrap">
                            🚨 {error.message}
                        </p>}
                    <InputWithLabel onChange={handleChange} value={formArticle.title} type='text' name='title' label="Title" className='mb-3' autoComplete="off" />
                    <InputWithLabel onChange={handleChange} value={formArticle.author} type='text' name='author' label="Author" className='mb-3' autoComplete="off" />
                    <InputWithLabel onChange={handleChange} value={formArticle.description} type='text' name='description' label="Description" className='mb-3' autoComplete="off" />
                    <InputWithLabel onChange={handleChange} value={formArticle.url} type='text' name='url' label="URL" className='mb-3' autoComplete="off" />
                    <InputWithLabel onChange={handleChange} value={formArticle.urlToImage} type='text' name='urlToImage' label="URL Image" className='mb-3' autoComplete="off" />
                    <Button type="button" className='bg-green-500 text-white w-full mt-5' onClick={handleSubmit}>
                        Save
                    </Button>
                </form>

                {PopUpStatus && (
                    <PopUp status={propsPopUp.status} message={`${propsPopUp.message}`} onClose={handleCloseModal} />
                )}
            </div >
        </ModalContainer>
    )
}

export default NewArticle

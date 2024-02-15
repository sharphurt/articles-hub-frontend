import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ArticleRepository from "../repository/ArticleRepository";
import ContentTable from "../components/ContentTable";
import Article from "../components/Article";

const ArticlePage = () => {

    const {id} = useParams();
    const [article, setArticle] = useState()
    const repository = new ArticleRepository()
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        repository.get(id).then(response => {
            setArticle(response)
        }).catch(e => {
            setErrorMessage(e.response.data.error)
        })
    }, [])

    const deleteArticle = () => {
        repository.delete(id).then(() => {
            navigate('../', {replace: true})
        }).catch(e => {
            setErrorMessage(e.response.data.error)
        })
    }

    return (<div>
        {
            article &&
            <div>
                <a href={'../'} className={'go-back-button'}>
                    {'<-- Go back to articles'}
                </a>

                <div className={'delete-article-button'} onClick={deleteArticle}>
                    {'[Х] Delete article'}
                </div>

                <ContentTable article={article}/>
                <Article article={article}/>
            </div>
        }
        {
            errorMessage &&
            <div>
                <div className={'error-message'}>
                    {errorMessage}
                </div>
                <a href={'../'} className={'go-back-button'}>
                    {'<-- Go back to articles'}
                </a>
            </div>
        }
    </div>);
}

export default ArticlePage;

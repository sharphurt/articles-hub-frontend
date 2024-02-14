import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ArticleRepository from "../repository/ArticleRepository";
import ContentTable from "../components/ContentTable";
import Article from "../components/Article";
import axios from "axios";
import {BASE_URL} from "../constants/constants";

const ArticlePage = () => {

    const {id} = useParams();
    const [article, setArticle] = useState()
    const repository = new ArticleRepository()
    const navigate = useNavigate();

    useEffect(() => {
        repository.get(id).then(response => {
            setArticle(response)
        })
    }, [])

    const deleteArticle = () => {
        repository.delete(id).then(() => {
                navigate('../', {replace: true})
            }
        )
    }

    return (article &&
        <div>
            <a href={'../'} className={'go-back-button'}>
                {'<-- Go back to articles'}
            </a>

            <div className={'delete-article-button'} onClick={deleteArticle}>
                {'Х Delete article'}
            </div>

            <ContentTable article={article}/>
            <Article article={article}/>
        </div>
    );
}

export default ArticlePage;

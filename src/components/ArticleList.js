import React, {useEffect, useState} from "react";
import ArticleRepository from "../repository/ArticleRepository";
import {Link} from "react-router-dom";

function ArticleList() {
    const [articles, setArticles] = useState()
    const repository = new ArticleRepository()
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        repository.getMany().then(response => {
            setArticles(response.articles)
        }).catch(e => {
            setErrorMessage(e.response.data.error)
        })
    }, [])

    const sendToServer = () => {
        const selectedFile = document.getElementById("input").files[0];
        if (typeof selectedFile === 'undefined')
            return

        const formData = new FormData();
        formData.append("file", selectedFile, selectedFile.name);
        repository.create(formData).then(() => {
            window.location.reload()
        }).catch(e => {
            setErrorMessage(e.response.data.error)
        })
    }

    return (<div>
            {
                articles &&
                <div>
                    <div className={'page-header'}>Articles</div>
                    <ul className={'articles-list'}>
                        {articles?.map(article => (<li key={article.id}>
                            <Link to={`/${article.id}`}>{article.name}</Link>
                        </li>))}
                    </ul>
                    <hr/>
                    <div>
                        <input id="input" type="file" accept=".txt"/>
                        <button onClick={sendToServer}>Загрузить статью</button>
                    </div>
                </div>
            }
            {
                errorMessage &&
                <div>
                    <div className={'error-message'}>
                        {errorMessage}
                    </div>
                </div>
            }
        </div>
    )
}

export default ArticleList;
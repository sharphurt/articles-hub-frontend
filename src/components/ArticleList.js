import {useEffect, useState} from "react";
import ArticleRepository from "../repository/ArticleRepository";
import {Link} from "react-router-dom";

function ArticleList() {
    const [articles, setArticles] = useState()
    const repository = new ArticleRepository()

    useEffect(() => {
        repository.getMany().then(response => {
            setArticles(response.articles)
        })
    }, [])

    const sendToServer = () => {
        const selectedFile = document.getElementById("input").files[0];
        if (typeof selectedFile === 'undefined')
            return

        const formData = new FormData();
        formData.append("file", selectedFile, selectedFile.name);
        repository.create(formData).then(() => window.location.reload())
    }

    return (
        <div>
            <div className={'page-header'}>Articles</div>
            <ul className={'articles-list'}>
                {articles?.map(article => (<li key={article.id}>
                    <Link to={`/article/${article.id}`}>{article.name}</Link>
                </li>))}
            </ul>
            <hr/>
            <div>
                <input id="input" type="file" accept=".txt"/>
                <button onClick={sendToServer}>Загрузить статью</button>
            </div>
        </div>
    )
}

export default ArticleList;
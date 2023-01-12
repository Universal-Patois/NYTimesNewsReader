import React from "react";
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import "./ArticleDescription.css"

const ArticleDescription = ({ articles }) => {

  const uri = useParams().id

  const articleDetails = articles.find(article => article.id === uri)

  return (
    <div className="article-description-container" >
      <center>
        <img src={articleDetails.multimedia[1].url} alt={articleDetails.abstract} />
        <h2 className="article-text" >{articleDetails.title}</h2>
        <h3 className="article-text" >{articleDetails.abstract}</h3>
        <h4 className="article-text" >{articleDetails.byline}</h4>
        <a href={articleDetails.url} target="_blank">
          <button className="article-button" >Read the full article</button>
        </a>
        <h4 className="article-text" >Last Updated: {dayjs(articleDetails.updated_date).format('MMMM-DD-YYYY')}</h4>
        <h4 className="article-text" >Published: {dayjs(articleDetails.published_date).format('MMMM-DD-YYYY')}</h4>
        <Link to="/">
          <button className="article-button">Back</button>
        </Link>
      </center>
    </div>
  )
}

export default ArticleDescription
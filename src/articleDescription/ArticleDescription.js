import React from "react";
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import "./ArticleDescription.css";

const ArticleDescription = ({ articles }) => {

  const uri = useParams().id

  const articleDetails = articles.find(article => article.id === uri)

  return (
    <div className="article-description">
      <div className="article-description-container" >
        <center>
          <picture>
            <img
              src={articleDetails.multimedia[1].url}
              srcSet={articleDetails.multimedia[2].url}
              sizes="(max-width: 300px) 300px"
              alt={articleDetails.abstract}
            />
          </picture>
          <h2 className="article-text" >{articleDetails.title}</h2>
          <h3 className="article-text" >{articleDetails.abstract}</h3>
          <h4 className="article-text" >{articleDetails.byline}</h4>
          <a href={articleDetails.url} target="_blank" rel="noreferrer">
            <button className="article-button" >Read the full article</button>
          </a>
          <h4 className="article-text" >Last Updated: {dayjs(articleDetails.updated_date).format('MMMM-DD-YYYY')}</h4>
          <h4 className="article-text" >Published: {dayjs(articleDetails.published_date).format('MMMM-DD-YYYY')}</h4>
          <Link to="/">
            <button className="article-button">Back</button>
          </Link>
        </center>
      </div>
    </div>
  )
}

export default ArticleDescription;
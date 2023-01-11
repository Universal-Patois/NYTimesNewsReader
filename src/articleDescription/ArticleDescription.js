import React from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import "./ArticleDescription.css"

const ArticleDescription = ({ articles }) => {

  const uri = useParams().id

  const articleDetails = articles.find(article => article.id === uri)

  return (
    <div className="article-description-container" >
      <center>
        <img src={articleDetails.multimedia[1].url} alt={articleDetails.abstract} />
        <h2>{articleDetails.title}</h2>
        <h3>{articleDetails.abstract}</h3>
        <h4>{articleDetails.byline}</h4>
        <a href={articleDetails.url}>
          <button>Read the full article</button>
        </a>
        <h4>Last Updated: {dayjs(articleDetails.updated_date).format('MMMM-DD-YYYY')}</h4>
        <h4>Published: {dayjs(articleDetails.published_date).format('MMMM-DD-YYYY')}</h4>
      </center>
    </div>
  )
}

export default ArticleDescription
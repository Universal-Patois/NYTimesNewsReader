import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
 
  const articleSelections = articles.map(article => {
    return (
      <div key={article.updated_date}>
        <Link to={`/article/${article.uri.slice(14)}`}>
          <img src={article.multimedia[1].url} alt={article.abstract} />
          <h2>{article.title}</h2>
        </Link>
        <h3>Subject: {article.des_facet.map(subject => subject + ', ')}</h3>
      </div>
    )
  })

  return (
    <div>
      {articleSelections}
    </div>
  )
}

export default Articles
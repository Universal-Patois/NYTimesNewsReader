import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {

  articles.forEach(article => {
    const articleId = uuidv4()
    article.id = articleId
  })

  const articleSelections = articles.map(article => {
    return (
      <div key={article.id}>
        <Link to={`/article/${article.id}`}>
          {!article.multimedia ?
            <img src="../assets/statue-of-liberty.png" alt="New York Times logo" /> :
            <img src={article.multimedia[2].url} alt={article.abstract} />
          }
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
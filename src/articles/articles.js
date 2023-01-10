import React from "react";

const Articles = ({ articles }) => {

  const articleSelections = articles.map(article => {
    
    return (
        <div key={article.created_date}>
          <img src={article.multimedia[1].url} alt={article.abstract} />
          <h2>{article.title}</h2>
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
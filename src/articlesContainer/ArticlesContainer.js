import React from "react";
import Articles from "../articles/Articles"

const ArticlesContainer = ({articles, error, sortArticles}) => {

  return (
    <div>
      {error ? <p>{error}</p> :
        <>
          <Articles articles={articles} sortArticles={sortArticles} />
        </>
      }
    </div>
  )
}

export default ArticlesContainer

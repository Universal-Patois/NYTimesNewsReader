import React from "react";
import Articles from "../articles/Articles"

const ArticlesContainer = ({articles, error}) => {

  return (
    <div>
      {error ? <p>{error}</p> :
        <>
          <Articles articles={articles} />
        </>
      }
    </div>
  )
}

export default ArticlesContainer

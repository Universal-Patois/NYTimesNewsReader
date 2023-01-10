import React, { useEffect, useState } from "react";
import Articles from "../articles/Articles"
import { fetchTopStories } from "../utilities/apiCalls";

const ArticlesContainer = () => {

  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchTopStories()
      .then(data => setArticles(data.results))
      .catch(error => setError(error.message))
  },[])

  return (
    <div>
      {error ? <p>{error}</p> :
      <Articles articles={articles} />
      }
    </div>
  )
}

export default ArticlesContainer

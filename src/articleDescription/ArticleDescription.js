import React from "react";
import { useParams } from "react-router-dom";

const ArticleDescription = ({ articles }) => {

  const uri = useParams().uri
  const uriBeginning = 'nyt://article/'
  const fullUri = uriBeginning.concat(uri)
 
  const articleDetails = articles.find(article => article.uri === fullUri)
  console.log(articleDetails)

  return (
    <div>
      <h3>sffgsg</h3>
    </div>
  )
}

export default ArticleDescription
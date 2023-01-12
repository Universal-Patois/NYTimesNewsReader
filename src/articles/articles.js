import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { newsTopics } from '../assets/newsTopics';
import "./Articles.css"


const Articles = ({ articles, sortArticles }) => {

  articles.forEach(article => {
    const articleId = uuidv4()
    article.id = articleId
  })

  const articleSelections = articles.map(article => {
    return (
      <div className='single-article' key={article.id}>
        <center>
          <Link to={`/article/${article.id}`}>
            {!article.multimedia ?
              <img src="../assets/statue-of-liberty.png" alt="New York Times logo" /> :
              <img src={article.multimedia[2].url} alt={article.abstract} />

            }
            <h2 className="article-title" >{article.title}</h2>
          </Link>
          <h4>Subjects: {article.des_facet.map(subject => subject + '. ')}</h4>
        </center>
      </div>
    )
  })

  return (
    <div className="articles">
      <center className="drop-down" >
        <DropdownButton variant="secondary" menuVariant="dark"id="dropdown-topic-button" title="Choose a Topic" drop={"down-centered"}>
          {newsTopics.map((topic) => (
            <Dropdown.Item value={topic} key={topic} onClick={(event) => sortArticles(event)} >{topic}</Dropdown.Item>
          ))}
        </DropdownButton>
      </center>
      {articleSelections}
    </div>
  )
}

export default Articles
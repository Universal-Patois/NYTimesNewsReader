import { React, useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { fetchTopStories, fetchNewsTopic } from '../utilities/apiCalls';
import { newsTopics } from '../assets/newsTopics';
import ArticlesContainer from '../articlesContainer/ArticlesContainer';
import ArticleDescription from "../articleDescription/ArticleDescription";
import './App.css';

function App() {

  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchTopStories()
      .then(data => setArticles(data.results))
      .catch(error => setError(error.message))
  }, [])

  const sortArticles = (event) => {
    const selectedTopic = event.currentTarget
    const value = selectedTopic.getAttribute('value')
    fetchNewsTopic(value)
      .then(data => setArticles(data.results))
      .catch(error => setError(error.message))
  }

  return (
    <main>
      <h1>New York Times: News Reader</h1>
      <DropdownButton id="dropdown-topic-button" title="Choose a Topic" drop={"down-centered"}>
        {newsTopics.map((topic) => (
          <Dropdown.Item value={topic} key={topic} onClick={(event) => sortArticles(event)} >{topic}</Dropdown.Item>
          )
        )}
      </DropdownButton>
      <Routes>
        <Route path='/article/:id' element={<ArticleDescription articles={articles} />} />
        <Route path="/" element={<ArticlesContainer articles={articles} error={error} />} />
      </Routes>
    </main>
  );
}

export default App;

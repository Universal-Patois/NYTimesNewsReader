import {React, useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchTopStories } from '../utilities/apiCalls';
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

  return (
    <main>
      <h1>New York Times: News Reader</h1>
      <Routes>
        <Route path='/article/:uri' element={<ArticleDescription articles={articles} />} />
        <Route path="/" element={<ArticlesContainer articles={articles} error={error} />} />
      </Routes>
    </main>
  );
}

export default App;

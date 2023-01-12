import { React, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchTopStories, fetchNewsTopic } from '../utilities/apiCalls';
import ArticlesContainer from '../articlesContainer/ArticlesContainer';
import ArticleDescription from "../articleDescription/ArticleDescription";
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <main className='main' >
      <Container>
        <Row>
          <Col>
            <center>
              <h1 className='heading' >New York Times: News Reader</h1>
            </center>
            <Routes>
              <Route path='/article/:id' element={<ArticleDescription articles={articles} />} />
              <Route path="/" element={<ArticlesContainer sortArticles={sortArticles} articles={articles} error={error} />} />
              <Route path='*' element={<Navigate to="/" replace /> } />
            </Routes>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;

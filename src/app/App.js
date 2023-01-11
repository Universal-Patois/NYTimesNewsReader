import { React, useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { fetchTopStories, fetchNewsTopic } from '../utilities/apiCalls';
import { newsTopics } from '../assets/newsTopics';
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
    <main>
      <Container>
        <Row>
          <Col>
            <center>
              <h1>New York Times: News Reader</h1>
            </center>
            <Routes>
              <Route path='/article/:id' element={<ArticleDescription articles={articles} />} />
              <Route path="/" element={<ArticlesContainer sortArticles={sortArticles} articles={articles} error={error} />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;

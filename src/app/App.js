import { Routes, Route } from 'react-router-dom';
import ArticlesContainer from '../articlesContainer/ArticlesContainer';
import './App.css';

function App() {
  return (
    <main>
      <h1>New York Times: News Reader</h1>
      <Routes>
        <Route path="/" element={<ArticlesContainer />} />
      </Routes>
    </main>
  );
}

export default App;

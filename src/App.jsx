import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import DatasetPage from './components/datasetPage';
import './App.css';
import ProjectModal from './components/DatasetCreationModal';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes >
        <Route exact path="/" element={<ProjectPage />} />
        <Route path="/dataset/:id" element={<DatasetPage />} />
        <Route path="/create-project" element={<ProjectModal />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
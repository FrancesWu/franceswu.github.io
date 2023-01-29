import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/App.scss';
import Timeline from './components/Timeline';
import TimelineWrapper from './components/TimelineWrapper';
import NavBar from './components/NavBar';
import Contents from './components/Contents';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Contents />
    </div>
  );
}

export default App;

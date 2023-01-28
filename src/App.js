import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/App.scss';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import TimelineWrapper from './components/TimelineWrapper';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AboutMe name="Frances" />
        <Timeline /> */}
        <NavBar></NavBar>
          <TimelineWrapper />
        {/* <Router>
          <Routes>
            <Route exact path='/' element={<div>home</div>} />
            <Route exact path='/aboutme' element={<AboutMe />} />
            <Route exact path='/hello' element={<div>Hello</div>} />
            <Route exact path='/experience' element={<TimelineWrapper />} />
          </Routes> 
        </Router>
          <TimelineWrapper />*/}

      </header>
    </div>
  );
}

export default App;

import './styles/App.scss';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe name="Frances" />
        <Timeline />
      </header>
    </div>
  );
}

export default App;

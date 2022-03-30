import './App.css';
import Nav from './components/nav/nav.js';
import Intro from './components/intro/intro.js';
import Skills from './components/skills/skills.js'
import Work from './components/work/work.js';
import Connect from './components/connect/connect';

function App() {
  return (
    <div className="app">
      <Nav />
      <Intro />
      <Skills />
      <Work />
      <Connect />
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
//import './index.css';
import RunHomescreen from './components/home';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Portfolio from './components/portfolio';
import Display from './components/iss';
import Footer from './components/footer';
import React from 'react';



class App extends React.Component {
  render() {
  return (
    <div>
      <RunHomescreen />
      <AboutMe />
      <Display/>
      <Footer/>
    </div>

  );
  }

}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          //Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;

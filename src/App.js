import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import {useState} from "react";

function App() {

  const urlToLearnReact = "https://reactjs.org";
  const timesLiked = 50;
  const randomWordsArray = ["Ronald, ", "Obama, ", "Donald"];

  const [name, setName] = useState("Mario");

  const handleClick = () => {
    console.log("Hello world");
    setName("Luigi");
  };
  const handleClickAgain = (name) => {
    console.log(`Hello ${name}`);
    setName("Bowser");
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>{
          console.log(`Hello anon`);
        }}>Click me anon</button>
        <button onClick={()=>{
          handleClickAgain('Josh')
        }}>Click me again</button>
      <p>The name is: {name}</p>
      </div>

      <header className="App-header" style={{
        display: "none",
        backgroundColor: "hotpink"}}>
        <p>{randomWordsArray}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={urlToLearnReact}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ({timesLiked})
        </a>

        <div>
        <header>JSX (not HTML!)</header>
          <p>
          React components consist of 2 parts;
          </p>
          <ul><li>logic</li><li>template</li></ul>
        </div>

        <div style={{width: '500px'}}>
          <header>JSX (not HTML!)</header>
          <p>All of the code you see in App() is written in JSX (not HTML!). It is converted by Babel to HTML on render. Hence we i.e. cannot use class=".. but instead we use className=" because 'class' is a HTML reserved keyword</p>
        </div>

        <div>
          <header>Component & exporting</header>
          <p>A component in a nutshell is a function in which we always return something (generally a JSX template) as seen below(the 'export default App' part) so it can be used in other parts (i.e. imported in the index.js file; App /)</p>
        </div>
        
      </header>
    </div>
  );
}

export default App;

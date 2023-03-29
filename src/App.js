import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
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

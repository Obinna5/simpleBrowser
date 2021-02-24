import logo from './logo.svg';
//import logo from './default.jpg';
import './App.css';

// Jesse Edit 

/*
const userProfileHeader = ({ profile }) => ({
  title: `${profile.name}`,
  headerTitleStyle: {
  color: ' #3949ab',
  textAlign: 'center',
  alignSelf: 'center'
  }
});
*/
function App() { 
  return ( 
    <div className="App"> // 

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
      </header>
    </div>
  );
}

export default App;

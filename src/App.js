import logo from './logo.svg';
//import logo from './default.jpg';
import './App.css';


// Line from Master
// An addition line in master
// Jesse Edit 

//An additional line from new branch

// Jesse Edit 
// I want this in master (1)
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

// My change 
function App() { 
  return ( 
    <div className="App"> 
 <header className="App-header">
     
      <img src={logo} className="App-logo" alt="logo" />
  
     <p>OBINNA</p>
</header>
    </div>
  );
}

export default App;



/* 

 <header className="App-header">
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


*/
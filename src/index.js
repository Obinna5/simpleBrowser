import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EditButton from './EditButton'; 
import reportWebVitals from './reportWebVitals';
import Grid from './Grid';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
// You can change the App tag and run the Grid.js class
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

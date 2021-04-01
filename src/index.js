import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <div>
      <p className="signature">
          <a href="https://github.com/ImogenReading/weather-app-react" className="openSource" target="blank"> Open Source Code </a>
      by Imogen Reading
      </p>
    </div>
    
  </React.StrictMode>,

  

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "/home/ubuntu/Desktop/Travel/public/styles.css";
import {Helmet} from "react-helmet-async";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
      
    </React.StrictMode>,
  );
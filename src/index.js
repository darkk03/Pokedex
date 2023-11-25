import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import App from './Components/App/App';
import store from './feauters/store';
import './Styles/index.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}

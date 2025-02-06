// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';  // ✅ Import Provider
import './index.css'
import store from './store/store.js';  // ✅ Import your Redux store
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
   <App />
  </Provider>
   
  </BrowserRouter>,
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
       <App />
    </React.StrictMode>,
  </BrowserRouter>
  </Provider>
)

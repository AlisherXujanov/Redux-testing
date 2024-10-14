import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap your app in the Provider */}
    {/* The store we defined earlier */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

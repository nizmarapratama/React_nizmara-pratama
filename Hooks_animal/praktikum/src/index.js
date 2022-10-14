import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react';
import store, { persistor } from "./store";
import { persistGate } from "redux-persist/integration/react"
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ApolloProvider client={apolloClient}>
   <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </BrowserRouter>
  </React.StrictMode>
 </ApolloProvider>
)

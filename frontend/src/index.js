import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
//import default bootstrap file
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    //whatever in element is gonna be rendered, if we are on the URL link pointed by path
    <Route path = "/" element = {<App />}>
      {/** nested routes; If child has index = true it means it points to the same URL as the parent*/}
      <Route index = {true} path = '/' element = {<HomeScreen />}>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);


reportWebVitals();

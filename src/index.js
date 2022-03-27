import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CountriesList, CountriesDetails } from '../src/components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/countries' element={<CountriesList />}/>
      <Route path='/countries/:country_code' element={<CountriesDetails />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
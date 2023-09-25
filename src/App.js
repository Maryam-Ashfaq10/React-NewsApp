import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomp from './components/Newscomp';
import { Route, Routes } from "react-router-dom"

const App = () => {

const apikey = process.env.REACT_APP_NEWSAPI

  
    return (
      <div>

        <Navbar />
        <Routes>

          <Route exact path="/" element={<Newscomp apik={apikey} key="general" country="us" cat="general" />} />
          <Route exact path="/science" element={<Newscomp apik={apikey} key="science" country="us" cat="science" />} />
          <Route exact path="/sports" element={<Newscomp apik={apikey} key="sports" country="us" cat="sports" />} />
          <Route exact path="/entertainment" element={<Newscomp apik={apikey} key="entertainment" country="us" cat="entertainment" />} />
          <Route exact path="/health" element={<Newscomp apik={apikey} key="health" country="us" cat="health" />} />
          <Route exact path="/business" element={<Newscomp apik={apikey} key="business" country="us" cat="business" />} />
          <Route exact path="/technology" element={<Newscomp apik={apikey} key="technology" country="us" cat="technology" />} />

        </Routes> 
      </div>
    )
  
}

export default App;



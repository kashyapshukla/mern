import React from "react";
import "./app.css"

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app

import RecordList from "./components/recordList/recordList";
import Edit from "./components/edit/edit";
import Create from "./components/login/create";
import LoginPage from "./components/login/page1"
import BrandLink from"./components/brandLink/BrandLink";

const App = () => {
  return (
    <div className="main-class" >
      {/* <BrandLink/> */}
      <LoginPage/>
      <div style={{ margin: 20 }}>
      <Routes>
        
        {/* <Route path="/create" element={<Create/>} /> */}
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        
      </Routes>
      </div>
    </div>
  );
};

export default App;

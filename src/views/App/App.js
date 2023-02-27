import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import Chart from "../Chart/Chart";
import Details from "../Details/Details";
import ErrorPage from "../ErrorPage/ErrorPage";

import logo from "../../assets/img/Logo.png";
import './App.css';

function App() {
    const nav = [
        {url:"/list/system", text:"The System", img:"", exact:true},
        {url:"/", text:"", img:logo, exact:true},
        {url:"/list/travellers", text:"The Travellers", img:"", exact:true}
    ];


  return (

      <BrowserRouter>
          <MainTemplate courseName={"Web Applications, Design and Development"} courseLink={"https://elearning.unimib.it/course/info.php?id=44672"}
                        apiName={"MediaWiki API"} apiLink={"https://www.mediawiki.org/wiki/API:Main_page"} navList={nav}>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/404" element={<ErrorPage />}/>
                  <Route path="/list/:type" element={<Chart />}/>
                  <Route path="/details/:type/:number" element={<Details />}/>
                  <Route path="*" element={<Navigate to="/404"/>}/>
              </Routes>
          </MainTemplate>
      </BrowserRouter>
  );
}

export default App;

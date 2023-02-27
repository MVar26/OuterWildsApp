import React from "react";
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"
import {useLocation} from "react-router-dom";

function MainTemplate (props) {
    const {children, courseName, courseLink, apiName, apiLink, navList} = props;

    let path = useLocation().pathname;
    const location = path.split("/")[1];


    return(
      <div className={`${location === "404" ? "errorBg" : "bodyBg"}`}>
          <Header navItems={navList}/>
          {children}
          <Footer courseName={courseName} courseLink={courseLink}
                  apiName={apiName} apiLink={apiLink}/>
      </div>
    );
}

export default MainTemplate;
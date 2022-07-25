

import React from "react";
import "./HomeLayout.css";
   import Header from "./header";
 import Footer from "./footer";
 
const HomeLayout = ({ children }) => {
  return (
    <div className="home-container" >
        <div className="home-container1">
        <Header />  
        <div style={{minHeight:"70vh"}}> {children}</div>
        {/* <h3>Welcome to Our Pharmacies</h3>
          <h1>We'll Always Make Time </h1>
          <h1>For You </h1> */}
        <Footer /> 
      </div>
    </div>
  )
}
export default HomeLayout;
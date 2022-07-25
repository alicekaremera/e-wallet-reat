import React from "react";
import Home from "../views/home";



import { Routes , Route } from "react-router-dom"; 


const Index = () => {
  
      return(
      <Routes>
       
        <Route exact path="/" element={<Home/>}></Route>
       
       

    </Routes>
  );
};
export default Index;

import React from "react";
import DefaultPage from "./components/DefaultPage";
import SelectFood from "./components/MainOrder/SelectFood";
import { Route,Routes } from "react-router-dom";
import MakeOrderList from "./components/MakeOrderList/MakeOrderList";

function App() {

  return (
   
    <div style={{display:'flex',flexWrap:'wrap',padding:'100px'}}>
    <Routes>
      <Route path="/" element={<DefaultPage/>} />
      
   
      <Route path="/selectfood" element={<>
        <SelectFood/>
        <MakeOrderList/></>}/>
     

      </Routes>

    </div>
  );
}

export default App;

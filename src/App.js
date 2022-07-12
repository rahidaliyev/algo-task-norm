import React from "react";
import DefaultPage from "./components/DefaultPage";
import SelectFood from "./components/MainOrder/SelectFood";
import { Link, Route,Routes } from "react-router-dom";
import MakeOrderList from "./components/MakeOrderList/MakeOrderList";
import {ImExit} from 'react-icons/im'


function App() {

  return (
   
    <div style={{display:'flex',padding:'100px'}}>
    <Routes>
      <Route path="/" element={<DefaultPage/>} />
      
   
      <Route path="/selectfood" element={<>
   <Link style={{marginLeft:'-60px',marginTop:"-70px"}} to="/"> <ImExit  size={30} /></Link> 
        <SelectFood/>
        <MakeOrderList/></>}/>
     

      </Routes>

    </div>
  );
}

export default App;

import React from "react";
import SelectFood from "./components/MainOrder/SelectFood";
import MakeOrderList from "./components/MakeOrderList/MakeOrderList";
import OrderForm from "./components/OrderForm/OrderForm";


function App() {

  return (
    <div style={{display:'flex',flexWrap:'wrap',padding:'100px'}}>
  <SelectFood/>
<MakeOrderList/>
<OrderForm/>
    </div>
  );
}

export default App;

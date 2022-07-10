import React from 'react'
import OrderForm from './OrderForm/OrderForm'
import { Link } from 'react-router-dom'


export default function DefaultPage() {
  return (
    <div>
    <div style={{flexDirection:'row',display:'flex'}}>
        <h1 style={{marginLeft:"40%",marginTop:"-50px"}}>Admin Panel</h1>
       </div>
       <div style={{marginRight:"1200px"}}>
       <button > <Link to="/selectfood" style={{margin: "30px 0 0 20px" ,height:"30px",width:"60px"}}>Sifariş yarat</Link></button>
       </div>
      <div style={{marginBottom:'20px'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
<OrderForm/>


    </div>
  )
}

import React from 'react'
import store from '../../redux/store'
import { useEffect,useState } from 'react'


export default function MakeOrderList(props) {

  const [orders,setOrders]=useState([])
  useEffect(()=>{
      const orders=store.getState()
      setOrders(orders.admin)
  },[])
  console.log(orders)
  return (
    <div style={{border:"1px solid black"}}>
<table>
  <thead>
    <tr style={{borderBottom: "1px solid black"}}>
      <th>Say</th>
      <th>Məhsul adı</th>
      <th>Miqdar</th>
      <th>Məbləğ</th>
      <th>Sifariş saatı</th>
      <th>Gözləmə</th>
      <th>#</th>
      <th>Geri</th>
       </tr>
    </thead>

    <tbody>

    {    orders.map((el)=>{return <table {...el}/>})}


 <tr>
    <td>1</td>
    <td>{orders.name}</td>
    <td>3</td>
    <td>9.6AZN</td>
    <td>15.59</td>
    <td>0 dəq</td>
    <td><button>verildi</button></td>
    <td><button id='back'>geri al</button></td>
 </tr>
      
    
   
  </tbody>
</table>
<button>Sifarişi tamamla</button>
    </div>
  )
}

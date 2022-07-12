import React, { useState,useEffect } from 'react'
import store from '../../redux/store'

import axios from 'axios'
import '../../styles//MakeOrderStyle/MakeOrder.css'





export default function SelectFood(props) {

  const calculatePrice=()=>{

  }

  const addtoOrder=()=>{
    store.dispatch({type:"ADD_TO_CARD",payload:{post: props}})
    }
  
  
  
    const [posts,setPosts]=useState([])
useEffect(()=>{
     axios.get('data.json')
      .then(res=>{
          console.log(res)
         setPosts(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
 

  },[])

  const [orders,setOrders]=useState([])
console.log(orders)
useEffect(()=>
{
  const post=store.getState()
  setOrders(post.orders)
  
},[])



  return (
    <div className='container'>
<h1>Aşağıdakı listdən məhsul seçimini edin</h1>

<form className='mainform'>

<label >Məhsul adı</label>
<select className='firstselect'>

{posts.map(post=><option key={post.id}>{post.name}</option>)}

</select>
</form>

<div className='lasttwo'>
<div className='secondcontainer'>
<label>Miqdar</label>
<input onChange={calculatePrice} className='amount'/>
</div>
<div className='price'>
<label>Qiyməti</label>
<input  />
</div>
</div>

<button onClick={addtoOrder}>Əlavə et</button>
    </div>
  )
}

import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../../styles//MakeOrderStyle/MakeOrder.css'
import store from '../../redux/store'

export default function SelectFood(props) {
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
<input  className='amount'/>
</div>
<div className='price'>
<label>Qiyməti</label>
<input value={props} />
</div>
</div>

<button onClick={addtoOrder}>Əlavə et</button>
    </div>
  )
}

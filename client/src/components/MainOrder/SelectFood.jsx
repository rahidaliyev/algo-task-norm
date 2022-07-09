import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../../styles//MakeOrderStyle/MakeOrder.css'

export default function SelectFood() {
  const [posts,setPosts]=useState([])


  useEffect(()=>{
       axios.get('http://localhost:5000/api')
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
<input className='amount'/>
</div>
<div className='price'>
<babel>Qiyməti</babel>
<input/>
</div>
</div>

<button>Əlavə et</button>
    </div>
  )
}

import React from 'react'
import '../../styles/MakeOrder.css'

export default function MakeOrder() {
  return (
    <div className='container'>
<h1>Aşağıdakı listdən məhsul seçimini edin</h1>

<form className='mainform'>

<label >Məhsul adı</label>
<select className='firstselect'>
  <option ></option>
  <option label="Çörəkdə Dönər"></option>
  <option label="Kabab"></option>
  <option label="Dolma"></option>
  <option label="Lülə"></option>
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
    </div>
  )
}

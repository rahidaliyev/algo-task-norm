import React from 'react'

export default function MakeOrderList() {
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
    <tr>
    <td>1</td>
    <td>Çörəkdə Dönər</td>
    <td>3</td>
    <td>9.6AZN</td>
    <td>15.59</td>
    <td>0 dəq</td>
    <td><button>verildi</button></td>
    <td><button id='back'>geri al</button></td>
 </tr>
 <tr>
    <td>1</td>
    <td>Çörəkdə Dönər</td>
    <td>3</td>
    <td>9.6AZN</td>
    <td>15.59</td>
    <td>0 dəq</td>
    <td><button>verildi</button></td>
    <td><button id='back'>geri al</button></td>
 </tr>
 <tr>
    <td>1</td>
    <td>Çörəkdə Dönər</td>
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

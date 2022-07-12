
import axios from "axios"
// import axios from "axios";

// const dataFetch= axios.get('data.json')
// .then( (res)=>{
// return res.json;
// })
// .then( ()=>{
//   console.log(dataFetch);
// })

// async function async_data_fetch(){
//   return await fetch("data.json")
//   .then((res)=>{
//     console.log(res); 
//     return res  
//   })
 
// }

// console.log(async_data_fetch());


// fetch(res.url)
//     .then((serverPromise) => 
//       serverPromise.json()
//         .then((j) => console.log(j))
//         .catch((e) => console.log(e))
//     )
//     .catch((e) => console.log(e));


// async function beautifulFunctionName(url) {
//   let response = await fetch(url);
//   console.log(response);
//   return response;
//   }
//   console.log(beautifulFunctionName(url)); // Returns Promise



// async function getItems(url){
//   try {
//       const response = await fetch(url, {
//           method: 'GET',
//           cache: 'no-cache',
//           headers: {
//               'Content-Type': 'application/json',
//           }
//       });
//       const data = await response.json();
//       return data;
//   } catch(e) {
//   }







// async function getData() {

//   const response = await axios.get("data.json")
//   console.log(response)
//   return response
// }

// fetch("data.json").then(
//   function(u){ return u.json();}
//   ).then(
//   function(json){
//   data_function(json); //calling and passing json to another function data_function
//   }
//   )
// let negroid
    
//   function data_function(data){
//     negroid=data
//     console.log(negroid)
//   alert(data.length); 
//   }

// function dataGet(){
// console.log(negroid)
// }




const initialState = {
  admin: [],
  orders: []

}
function reducer(state = initialState, action) {
axios.get('data.json')
       .then(res=>{
           console.log(res)
           let pusheddata=state.orders.push(res)
           console.log(pusheddata)
       })
       .catch(err=>{
           console.log(err)
          
       })
     
   
 
  switch (action.type) {
    case 'ADD_TO_CARD':
      const orders = [...state.admin, action.payload.post]
      return { ...state, orders}



    default: return state
  }
}
export default reducer
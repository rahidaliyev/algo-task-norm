// import axios from "axios"


// function assignData(){
// axios.get('data.json')
// .then(res=>{
// //   console.log(res) 
// //  this.initialState.orders=res.data
//   // console.log(this.initialState.orders)
// return res
// })
// .catch(err=>{
//   console.log(err)
// })

// }

// const dataFetch= fetch('data.json')
// .then( (res)=>{
// return res.json;
// })
// .then( ()=>{
//   console.log(dataFetch);
// })

// async function getData() {

//   const response = await axios.get("data.json")
//   const dashshagh = await response.json
//   console.log(dashshagh)
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
  orders: [
    { "id": 1, "name": "sugar", "quantity": 30, "price": 30 },
    { "id": 2, "name": "tea", "quantity": 31, "price": 20 },
    { "id": 3, "name": "oil", "quantity": 32, "price": 20 },
    { "id": 4, "name": "bread", "quantity": 33, "price": 20 },
    { "id": 5, "name": "pen", "quantity": 34, "price": 20 },
    { "id": 6, "name": "apple", "quantity": 35, "price": 20 },
    { "id": 7, "name": "lemon", "quantity": 36, "price": 20 },
    { "id": 8, "name": "macaroni", "quantity": 37, "price": 20 },
    { "id": 9, "name": "tomato", "quantity": 38, "price": 20 },
    { "id": 11, "name": "cucumber", "quantity": 39, "price": 20 },
    { "id": 12, "name": "zomato", "quantity": 39, "price": 20 },
    { "id": 13, "name": "watermalon", "quantity": 39, "price": 20 },
    { "id": 14, "name": "onion", "quantity": 3, "price": 20 }
  ]

}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CARD':
      const orders = [...state.admin, action.payload.post]
      return { ...state, orders }



    default: return state
  }
}
export default reducer
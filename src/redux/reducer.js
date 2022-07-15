
import axios from "axios"



let initialState = {
  admin: [],
  orders: []

}
function reducer(state = initialState, action) {
  function dataAdder(data){
          state.orders.push(data)
          
  }


let mydata=axios.get('data.json')
       .then(res=>{
    dataAdder(res)
           console.log(res)
       })
       .catch(err=>{
           console.log(err)
          
       })

 console.log(state.orders.push(mydata))

  switch (action.type) {
    case 'ADD_TO_CARD':
      console.log(state.orders[1].data[0])
     
      console.log(state.admin)
      const admin = [...state.admin, action.payload.post]
      return { ...state, admin}



    default: return state
  }
}
export default reducer
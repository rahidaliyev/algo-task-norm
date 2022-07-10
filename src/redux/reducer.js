

const initialState={
  admin: [], 
  orders: []

}

function reducer(state=initialState,action){
  switch(action.type){
      case 'ADD_TO_CARD':
 const orders=[...state.orders,action.payload.post]
 return {...state,orders} 



      default: return state
  }
}
export default reducer
import {
    ADD_FRAME_TO_CART,
    REMOVE_FROM_CART,
    PLACE_ORDER
  } from '../actions/action';
  
  const initialState = {
    myCart: [],
    
  }
  
  const cartReducer = (state = initialState, action) => {
  
    switch (action.type) {
      
      case ADD_FRAME_TO_CART:
  
        console.log(state);
  
        return {
          ...state,
          myCart: [...state.myCart, action.payload]
        };
  
      case REMOVE_FROM_CART:
  
        console.log(state);
  
        return {
          ...state,
          myCart: state.myCart.filter(item => item !== action.payload)
        };
  
        case PLACE_ORDER:
  
          console.log(state);
    
          return {
            ...state,
            myCart:''
          };
  
  
      default: // need this for default case
        return state;
    }
  }
  
  
  
  export default cartReducer;
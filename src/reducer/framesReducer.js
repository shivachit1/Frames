import {
  GET_FRAMES_DATA,
  SHOW_FRAME_DETAILS,
  CLOSE_FRAME_DETAILS,
  ADD_FRAME_TO_CART,
  REMOVE_FROM_CART,
  PLACE_ORDER
} from '../actions/action';

const initialState = {
  framesLoaded: false,
  data: '',
  showDetails: false,
  frame: '',
  cart: [],
  
}

const frameReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_FRAMES_DATA:

      console.log(state);

      return {
        ...state,
        framesLoaded: true,
        data: action.payload
      };

    case SHOW_FRAME_DETAILS:


      console.log(state);

      return {
        ...state,
        showDetails: true,
        frame: action.payload
      };

    case CLOSE_FRAME_DETAILS:

      console.log(state);

      return {
        ...state,
        showDetails: false,
        frame: ''
      };

    case ADD_FRAME_TO_CART:

      console.log(state);

      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case REMOVE_FROM_CART:

      console.log(state);

      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload)
      };

      case PLACE_ORDER:

        console.log(state);
  
        return {
          ...state,
          cart:''
        };


    default: // need this for default case
      return state;
  }
}



export default frameReducer;
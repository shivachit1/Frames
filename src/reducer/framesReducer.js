import {
  GET_FRAMES_DATA
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


    default: // need this for default case
      return state;
  }
}



export default frameReducer;
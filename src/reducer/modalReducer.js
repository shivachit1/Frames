import {
    SHOW_FRAME_DETAILS,
    CLOSE_FRAME_DETAILS
  } from '../actions/action';
  
  const initialState = {
    showDetails: false,
    frame: ''
    
  }
  
  const modalReducer = (state = initialState, action) => {
  
    switch (action.type) {
      
  
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

  
  
      default: // need this for default case
        return state;
    }
  }
  
  
  
  export default modalReducer;
import Data from '../frames.json';

// Action types
export const GET_FRAMES_DATA ="GET_FRAMES_DATA";
export const SHOW_FRAME_DETAILS ="SHOW_FRAME_DETAILS";
export const CLOSE_FRAME_DETAILS = "CLOSE_FRAME_DETAILS";
export const ADD_FRAME_TO_CART = "ADD_FRAME_TO_CART";
export const SHOW_MY_CART = "SHOW_MY_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const PLACE_ORDER = "PLACE_ORDER";


export const getFramesData = () =>{
    console.log('action called');
    return {
        type:GET_FRAMES_DATA,
        payload:Data.frames
    }
   
};


export const showFrameDetails = (frame) =>{

    console.log("frame Clicked "+ frame.name);

    return {
        type:SHOW_FRAME_DETAILS,
        payload:frame
    }
};

export const closeFrameDetails = () =>{

    console.log("frame close Clicked ");

    return {
        type:CLOSE_FRAME_DETAILS,
        payload:false
    }
};

export const addFrameToCart = (frame) =>{
    console.log("frame added to cart "+ frame.name);

    return {
        type:ADD_FRAME_TO_CART,
        payload:frame
    }
};

export const removeFromCart = (frame) =>{
    console.log("remove frame from cart ");

    return {
        type:REMOVE_FROM_CART,
        payload:frame
    }
};

export const placeOrder = (frame) =>{
    console.log("place Order ");

    return {
        type:PLACE_ORDER
    }
};
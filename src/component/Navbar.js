import { Component, React } from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class Navbar extends Component{

    render(){
        const cartItemCount = this.props.frames.length;
        return (
            <ul>
                <Link to="/">
                <h2 className="App-header">Frames</h2>
                </Link>
                
                <Link to="/mycart">
                <h5 className="my-cart">My Cart ({cartItemCount})</h5>
                </Link>
                
                
                
            </ul>
        )
    }
   
}

// here state.frames represents to state of whole store and frames is connection made with frame reducer. 
//we used frames as name in combine reducer
const mapStateToProps = (state) => {
    return {
        frames: state.cart.myCart
    };
}

export default connect(mapStateToProps)(Navbar);

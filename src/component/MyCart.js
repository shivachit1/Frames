import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeFromCart,placeOrder } from '../actions/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MyCart extends Component {
    

    componentDidMount() {
        console.log(this.props);
    }

    OrderPlaced = () => {
       
        this.props.placeOrder();
        toast.info("Oder received! Thank you for your order.",{
            autoClose:2000
        });
        
        setTimeout(()=> {
            this.props.history.push("/");
        }, 2500);
        
    }
    render() {

        const cartSize = this.props.frames.length;
        

        return (

            <div >
                <ToastContainer />
                {cartSize > 0 ?
                    <div>
                       
                        <div className="list-container">

                            {this.props.frames.map((frame) =>
                                <div className="cardView" key={frame.id}>
                                    <h3 className="price">{frame.price}</h3>
                                    <img className="image" src={frame.imageLink} alt="" />
                                    <h4>{frame.name}</h4>
                                    <button className="remove" onClick={() => this.props.removeFromCart(frame)}>Remove</button>
                                </div>

                            )}
                        </div>

                        <div className="footer">
                            <h3>Total Price : 100€</h3>
                            <button className="button" onClick={()=>this.OrderPlaced()}>Pay</button>
                            
                        </div>
                    </div>
                    :
                    <div>
                        Your cart is empty
                </div>
                }




            </div>

        )
    }

}


// here state.frames represents to state of whole store and frames is connection made with frame reducer. 
//we used frames as name in combine reducer
const mapStateToProps = (state) => {
    return {
        frames: state.frames.cart,
        orderPlaced:state.frames.orderPlaced
    };
}

const mapDispatchToProps = () => {
    return {
        removeFromCart,
        placeOrder

    }
}

export default connect(mapStateToProps, mapDispatchToProps())(MyCart);
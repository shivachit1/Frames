import React, { Component } from 'react';
import {connect} from 'react-redux';
import { closeFrameDetails, addFrameToCart } from '../actions/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class FrameDetails extends Component {

    

    addToCart = () => {
        this.props.addFrameToCart(this.props.frame);
        toast.info("Item added to cart.",{
            autoClose:2000
        });

        setTimeout(()=> {
            this.props.closeFrameDetails();
        }, 2000);

    }


    render(){
       // const showHideClassName = this.props.showDetails ? "modal display-block" : "modal display-none";

    console.log(this.props);
        
    return (
            <div>
                {this.props.showDetails ?
                <div className="modal">
                    <ToastContainer />
                <div className="modal-main">
                
                    <button className="close" onClick={()=>this.props.closeFrameDetails()}>x</button>
                
                <div className="details">
                 <img className="image" src={this.props.frame.imageLink} alt=""/>
                 <h4>{this.props.frame.name}</h4>
                 <h3>{this.props.frame.price}</h3>
                 <p>{this.props.frame.description}</p>
                    <p>Frame: {this.props.frame.dimension.width} x {this.props.frame.dimension.handleLength}</p>
                    <p>Lens: {this.props.frame.dimension.lensWidth} x {this.props.frame.dimension.lensheight}</p>
                 <button className="button" onClick={()=>this.addToCart()}>Add to cart</button>
                 </div>
                 </div>
             </div>
             :
             null
            }
            </div>
        
    )
    }

}

const mapStateToProps = (state) =>{
    return{
        showDetails:state.frames.showDetails,
        frame:state.frames.frame
    };
    
}

const mapDispatchToProps = () =>{
    return {
        closeFrameDetails,
        addFrameToCart

    }
}

export default connect(mapStateToProps,mapDispatchToProps())(FrameDetails);
import React, { Component } from 'react';
import { connect } from "react-redux";
import {getFramesData,showFrameDetails} from '../actions/action';

class Frames extends Component {


    componentDidMount(){
        console.log(this.props);
    }

    render() {

        return (
           
            <div >
                {this.props.framesLoaded ?
                <div className="list-container">
                {this.props.frames.map((frame) =>
                    <div className="cardView" key={frame.id}>
                        <h3 className="price">{frame.price}</h3>
                        <img className="image" src={frame.imageLink} alt="" />
                        <h4>{frame.name}</h4>
                        <button className="button" onClick={()=>this.props.showFrameDetails(frame)}>View Details</button>
                    </div>

                )}
                
                </div>
                :
                <div>data is loading...</div>
                }

            
            </div>

        )
    }

}


// here state.frames represents to state of whole store and frames is connection made with frame reducer. 
//we used frames as name in combine reducer
const mapStateToProps = (state) => {
    return {
        frames: state.frames.data,
        framesLoaded:state.frames.framesLoaded
    };
}


const matchDispatchToProps=()=>{
    return{
        getFramesData,
        showFrameDetails
    };
}

export default connect(mapStateToProps,matchDispatchToProps())(Frames);

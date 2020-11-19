import  React,{ useState } from 'react';
import GlassDetails from './FrameDetails';


const Frame = (props) =>{

    const [detail,setDetail] = useState(false);

    const closeDetails =()=>{
            setDetail(false);
    }

    return (
        <div >
            <h3 className="price">{props.frame.price}</h3>
            <img className="image" src={props.frame.imageLink} alt=""/>
            <h4>{props.frame.name}</h4>
            <p>{props.frame.description}</p>
            <button className="button" onClick={()=>setDetail(true)}>View more details</button>
            {detail ?
            <GlassDetails frame={props.frame} showDetails={detail} closeDetails={closeDetails}/>
            :
            null
            }
        </div>
    )

}


export default (Frame);

import React from 'react';
import {increase} from "../redux/actions/CountAction";
import {connect} from "react-redux";
const IncreaseCounter = ({increase}) => {
    return (
        <div className = "change-quantity" onClick={()=>{increase()}}>
            +
        </div>
    );
};

const mapDispatchToProps = dispatch=>({
    increase : ()=>{
        dispatch(increase(1));
    }
})

export default connect(null,mapDispatchToProps)(IncreaseCounter);
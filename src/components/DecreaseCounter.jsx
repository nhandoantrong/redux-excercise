import React from 'react';
import {decrease} from "../redux/actions/CountAction";
import {connect} from "react-redux";
const DecreaseCounter = ({decrease}) => {
    return (
        <div className = "change-quantity" onClick={()=>{decrease()}}>
            -
        </div>
    );
};

const mapDispatchToProps = dispatch=>({
    decrease : ()=>{
        dispatch(decrease(1));
    }
})

export default connect(null,mapDispatchToProps)(DecreaseCounter);
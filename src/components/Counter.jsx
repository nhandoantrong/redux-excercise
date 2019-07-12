import React from 'react';
import { connect } from 'react-redux';

const Counter = ({counter}) => {
    return (
        <div className="value">
            {counter}
        </div>
    );
};

const mapStateToProps = state =>({
    counter: state.Counter.counter
})

export default connect(mapStateToProps)(Counter);
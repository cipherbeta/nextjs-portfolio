import React from 'react';

const Sandwich = props => (
    <div onClick={props.toggle} className={"sandwich" + (props.active ? " active" : "")}>
        <div className="sandwich-slice"/>
        <div className="sandwich-slice"/>
        <div className="sandwich-slice"/>
    </div>
)

export default Sandwich;
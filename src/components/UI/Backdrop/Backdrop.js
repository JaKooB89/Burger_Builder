import React from 'react';
import './Backdrop.sass'

const Backdrop = props => (
    props.show ? <div className="Backdrop" onClick={props.clicked}> </div> : null
);

export default Backdrop;
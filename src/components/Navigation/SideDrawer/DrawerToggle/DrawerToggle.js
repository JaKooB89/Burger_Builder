import React from 'react';
import './DrawerToggle.sass'

const DrawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className="DrawerToggle">
            <div> </div>
            <div> </div>
            <div> </div>
        </div>
    );
};

export default DrawerToggle;
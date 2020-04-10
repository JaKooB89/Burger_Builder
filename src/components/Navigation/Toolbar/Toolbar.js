import React from 'react';
import './Toolbar.sass'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo />
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default Toolbar;
import React, {Component, Fragment} from "react";
import './Layout.sass';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showDrawer: false
    };
    sideDrawerClosedHandler = () => {
        this.setState({showDrawer: false})
    };
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showDrawer: !prevState.showDrawer};
        });
    };
    render() {
        return (
            <Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout;
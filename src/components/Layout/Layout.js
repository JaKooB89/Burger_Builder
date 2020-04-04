import React, {Fragment} from "react";
import './Layout.sass';

const layout = (props) => (
    <Fragment>
        <header className="App-header">
            <h1>Burger Builder</h1>
            <p>ReactJS Application</p>
            <code>npm start</code>
        </header>
        <main className="Content">
            {props.children}
        </main>
    </Fragment>
);

export default layout;
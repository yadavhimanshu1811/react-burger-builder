import React from 'react';
import Aux from '..//../HOC/Aux';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => {
    return (
        <Aux>
            <SideDrawer state={props.state}/>
            <Toolbar menuClick={props.menuClick}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );

}

export default layout;
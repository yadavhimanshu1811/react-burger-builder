import React from 'react';
import Aux from '..//../HOC/Aux';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
// import Backdrop from '../UI/Backdrop/Backdrop';

const layout = (props) => {
    return (
        <Aux>
            {/* <Backdrop show={props.showSideDrawer} /> */}
            <SideDrawer state={props.showSideDrawer} />
            <Toolbar menuClick={props.menuClick} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );

}

export default layout;
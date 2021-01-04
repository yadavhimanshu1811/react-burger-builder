import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../../HOC/Aux';
import classes from './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";


const layout = props => {
    const [showSideDrawer, setshowSideDrawer] = useState(false);

    const toggleSideDrawer = () => {
        const currState = showSideDrawer;
        setshowSideDrawer(!currState);
    }

    return (
        <Aux>
            <SideDrawer
                isAuth={props.isAuthenticated}
                showSideDrawer={showSideDrawer}
                toggleSideDrawer={toggleSideDrawer} />
            <Toolbar
                isAuth={props.isAuthenticated}
                menuClick={toggleSideDrawer} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout);
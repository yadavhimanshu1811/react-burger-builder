import React from 'react';
import { connect } from 'react-redux';

import Aux from '..//../HOC/Aux';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    toggleSideDrawer = () => {
        const currState = this.state.showSideDrawer;
        this.setState({ showSideDrawer: !currState });
    }
    render() {
        return (
            <Aux>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    showSideDrawer={this.state.showSideDrawer}
                    toggleSideDrawer={this.toggleSideDrawer} />
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    menuClick={this.toggleSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);
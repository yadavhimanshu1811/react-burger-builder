import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
    state = {
        showSideDrawer:false
    }

    toggleSideDrawer=()=>{
        const currState= this.state.showSideDrawer;
        this.setState({showSideDrawer:!currState});
    }
    render() {
        return (
            <div>
                <Layout menuClick={this.toggleSideDrawer} state={this.state.showSideDrawer}>
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const app = props => {

    useEffect(()=> {
        props.onTryAutoSignUp();
    },[]);

    let routes = (
        <Switch>
            <Route path="/reactLiveWebsite/auth" component={Auth} />
            <Route path="/reactLiveWebsite/" exact component={BurgerBuilder} />
            <Redirect to='/reactLiveWebsite' />
        </Switch>
    );
    if (props.isAuth) {
        routes = (
            <Switch>
                <Route path="/reactLiveWebsite/auth" component={Auth} />
                <Route path="/reactLiveWebsite/checkout" component={Checkout} />
                <Route path="/reactLiveWebsite/orders" component={Orders} />
                <Route path="/reactLiveWebsite/logout" component={Logout} />
                <Route path="/reactLiveWebsite/" exact component={BurgerBuilder} />
                <Redirect to='/reactLiveWebsite' />
            </Switch>
        );
    }


    return (
        <div>
            <Layout>
                {routes}
            </Layout>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app));
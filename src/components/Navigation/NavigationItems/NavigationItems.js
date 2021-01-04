import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} style={{flexFlow :props.flexFlow}}>
            <NavigationItem link='/reactLiveWebsite/' exact>Burger Builder</NavigationItem>
            {
                props.isAuth ? <NavigationItem link='/reactLiveWebsite/orders' >Orders</NavigationItem> : null
            }
            {!props.isAuth
                ? <NavigationItem link='/reactLiveWebsite/auth' >Authenticate</NavigationItem>
                : <NavigationItem link='/reactLiveWebsite/logout' >Logout</NavigationItem>
            }

        </ul>
    );
}

export default navigationItems;
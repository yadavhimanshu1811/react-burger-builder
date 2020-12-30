import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/reactLiveWebsite/' exact>Burger Builder</NavigationItem>
            <NavigationItem link='/reactLiveWebsite/orders' >Orders</NavigationItem>
            <NavigationItem link='/reactLiveWebsite/auth' >Authenticate</NavigationItem>
        </ul>
    );
}

export default navigationItems;
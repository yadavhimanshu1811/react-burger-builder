import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../HOC/Aux';

const sideDrawer = (props) => {
  if (!props.showSideDrawer) return null;
  return (
    <Aux>
      <Backdrop show={props.showSideDrawer} clicked={props.toggleSideDrawer} />
      <div className={classes.SideDrawer} onClick={props.toggleSideDrawer}>
        <Logo height='8%' width='55%' />
        <nav>
          <NavigationItems isAuth={props.isAuth} flexFlow='column' />
        </nav>
      </div>
    </Aux>

  );
}

export default sideDrawer;
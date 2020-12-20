import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.css';
import Aux from '../../../HOC/Aux';

const sideDrawer = (props) => {
  if (!props.state) return null;
  return (
    <Aux>
      <div className={classes.SideDrawer}>
        <Logo height='11%' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>

  );
}

export default sideDrawer;
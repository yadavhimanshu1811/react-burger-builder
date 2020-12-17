import React from 'react';
import classes from "./Toolbar.css";
import Logo from '../../Logo/Logo';
import NavtigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

const toolbar=(props)=> {
  return (
    <header className={classes.Toolbar}>
        {/* <div onClick={props.menuClick}>Menu</div> */}
        <Button clicked={props.menuClick}>Menu</Button>
        <Logo height='80%'/>
        <nav>
            <NavtigationItems/>
        </nav>
    </header>
  );
}

export default toolbar;
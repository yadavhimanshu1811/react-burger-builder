import React from 'react';
import classes from "./Toolbar.css";
import Logo from '../../Logo/Logo';
import NavtigationItems from '../NavigationItems/NavigationItems';


const toolbar=(props)=> {
  return (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo height='80%'/>
        <nav>
            <NavtigationItems/>
        </nav>
    </header>
  );
}

export default toolbar;
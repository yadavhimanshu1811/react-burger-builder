import React from 'react';
import classes from "./Toolbar.css";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

const toolbar=(props)=> {
  return (
    <header className={classes.Toolbar}>
        {/* <div onClick={props.menuClick}>Menu</div> */}
        <Button clicked={props.menuClick}>Menu</Button>
        <Logo height='90%' width='12%'/>
        <nav>
            <NavigationItems isAuth={props.isAuth}/>
        </nav>
    </header>
  );
}

export default toolbar;
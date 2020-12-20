// import React from 'react';
import axios from 'axios';

const instance = axios.create({
 baseURL: 'https://my-react-burger-1811-default-rtdb.firebaseio.com/'
});

export default instance;
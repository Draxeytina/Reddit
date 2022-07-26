import { configureStore } from '@reduxjs/toolkit';
import stocks from './stocks';

const reducer = { stocks };

const store = configureStore({ reducer });

export default store;

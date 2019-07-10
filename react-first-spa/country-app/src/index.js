import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
import routes from './routes';
import * as serviceWorker from './serviceWorker';
import {getCountries} from "./actions/actions";
//import DevTools from './store/DevTools';

import './country.css'


ReactDOM.render(<Provider store={store}>
	<div>
		<Router history={hashHistory} routes={routes}/>
	</div>
</Provider>, document.getElementById('root'));

store.dispatch(getCountries());


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

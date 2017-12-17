import React from 'react';
import { createStore } from 'redux';

class TheGist extends React.Component{
	render(){

	const counter = function(state = 0, action) {
		switch (action.type) {
			case 'INCREMENT':
				return state + 1
			case 'DECREMENT':
				return state - 1
			default:
				return state
		}
	}

	let store = createStore(counter)

	store.subscribe(() => {
		console.log("My Store is: ", store.getState());
	})

	store.dispatch({ type: 'INCREMENT' })
	store.dispatch({ type: 'DECREMENT' })
	store.dispatch({ type: 'DECREMENT' })


		return(
			<h1>{store.getState()}</h1>
		);
	}
}

export default TheGist;
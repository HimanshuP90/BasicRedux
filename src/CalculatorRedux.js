import React, { Component } from 'react';
import { createStore } from 'redux';

class CalculatorRedux extends Component {
	render() {

	//2nd Step pass state and action in reducer
	const reducer = (state, action) => {
		switch (action.type) {
			case "ADD":
				state = state + action.payload;
				break;
			case "MULTIPLY":
				state = state * action.payload;
				break;
			default:
				break;
		}
		return state;

	};

	const store = createStore(reducer, 3); //1st step Create store

	//3rd step subscribe returned store from reducer
	store.subscribe(() => {
		console.log("Store updated ..!!", store.getState());
	});

	//4th step: then dispatch that action
	store.dispatch({type: "ADD", payload: 10});
	store.dispatch({type: "MULTIPLY", payload: 4});



		return(
			<div>
			My Calculator using redux
			</div>
		);
	}

}

export default CalculatorRedux;
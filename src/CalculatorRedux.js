import React, { Component } from 'react';
import { createStore } from 'redux';

class CalculatorRedux extends Component {
	render() {

	const initialState = {
		result: 1,
		lastValues: []
	}

	//2nd Step pass state and action in reducer
	const reducer = (state = initialState, action) => {
		switch (action.type) {
			case "ADD":
				state = {
					...state,
					result: state.result + action.payload
				};
				break;
			case "SUBTRACT":
				state = {
					...state,
					result: state.result - action.payload
				};				break;
			default:
				break;
		}
		return state;

	};

	const store = createStore(reducer); //1st step Create store

	//3rd step subscribe returned store from reducer
	store.subscribe(() => {
		console.log("Store updated ..!!", store.getState());
	});

	//4th step: then dispatch that action
	store.dispatch({type: "ADD", payload: 100});
	store.dispatch({type: "ADD", payload: 22});
	store.dispatch({type: "SUBTRACT", payload: 80});



		return(
			<div>
			My Calculator using redux
			</div>
		);
	}

}

export default CalculatorRedux;
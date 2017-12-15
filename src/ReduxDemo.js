import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
	render() {

	//Step 2 Reducer: state n action
	const reducer = function (state, action) {
		if (action.type === "STUDY") {
			return action.payload
		}

		if (action.type === "FULLSTUDY") {
			return action.payload
		}
		return state;
	}

	//Step 1 Store: reducer n state
	const store = createStore(reducer, "NOSTUDY");
	
	//Step 3: Subscribe
	store.subscribe(() => {
		console.log("Store is now", store.getState());
	})

	//Step 4: Dispatch action
	store.dispatch({type: "STUDY", payload: "Redux is a predictable state container for JavaScript apps"});
	store.dispatch({type: "FULLSTUDY", payload: "No knowledge"});


		return (
			<div>
			  test
			</div>
		);
	}
}

export default ReduxDemo;
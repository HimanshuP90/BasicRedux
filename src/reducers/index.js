//reducers take current state and action

const initialState = {
	angular: 0,
	react: 0,
	vuejs: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'VOTE_ANGULAR' :
			console.log("Vote angular");
			return Object.assign({}, state, {
				angular: state.angular + 1
			})
		case 'VOTE_REACT' :
			console.log("Vote react");
			return Object.assign({}, state, {
				react: state.react + 1
			})		
		case 'VOTE_VUEJS' :
			console.log("Vote vuejs");
			return Object.assign({}, state, {
				vuejs: state.vuejs + 1
			})
		default:
		 return state
	}
}
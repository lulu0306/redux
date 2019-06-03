
//Library Code

function createStore(reducer){
	//The store should have four parts 
	// 1. The state
	// 2. Get the state
	// 3.Listen for changes on the state
	// 4.update the state

	let state
	// array of listeners 
	let listeners = []

	// return the state of the application 

	const getState = () => state
	const subscribe = (listener) =>{
		listeners.push(listener)

		return() =>{
			listeners = listeners.filter((l) => l !== listener)
		}
	} 


// function to update the state on the actual store 
const dispatch = (action) => {

	state = reducer(state, action);
	listeners.forEach((listener) => listener());
}


return{
	getState,
	subscribe,
	dispatch
}

}

//App code

// reducer function

function todos(state = [],action){
	if (action.type === 'ADD_TODO') {
		return state.cocant([action.todo]) 
	}
	return state
}

	



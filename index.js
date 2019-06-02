function todos(state,action){
	if (action.type === 'ADD_TODO') {
		return state.cocant([action.todo]) 
	}
	return state
}




function createStore(){
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


	
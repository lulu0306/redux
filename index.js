
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

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL ='ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';


function addTodoAction(action){
	return{
		type:ADD_TODO,
		todo
	}

}


function removeTodoAction(id){
	return{
		type:REMOVE_TODO,
		id
	}
}


function todos(state = [],action){

	switch(action.type){
		case ADD_TODO:
		return state.concat([action.todo]) 
		case REMOVE_TODO:
		return state.filter((todo) => todo.id !== action.id )
		case TOGGLE_TODO:
		return state.map((todo) => todo.id !== action.id ? todo : 
			Object.assing({}, todo, {complete: !todo.complete}))
		default: 
		return state
	}

}

function goals(state =[], action){

	switch(action.type){
		case ADD_GOAL:
		return state.concat([action.goal]);
		case REMOVE_GOAL:
		return state.filter((goal) => goal.id !== action.id)
		default:
		return state
	}
}

function app(state = {},action){
	return{
		todos: todos(state.todos,action),
		goals: goals(state.goals,action),
	}
}
	
const store = createStore(app);

store.subscribe(() => {
	console.log('the new state is:', store.getState())
})


store.dispatch({
	type:ADD_TODO,
	todo:{
		id:0,
		name:'Learn Redux',
		complete: false
	}
})
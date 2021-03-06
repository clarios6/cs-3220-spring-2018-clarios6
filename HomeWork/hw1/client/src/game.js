// default interval as 1 second
const interval = 5000;

/**
 * loop is main loop of the game, which will be executed once every second (
 * based on the interval variable configuration)
 */
export function loop (store) {
	// TODO: increment counter based on the generators in the state
	// hint: read how many "generators" in store and iterate through them to
	//       count how many value to increment to "resource"
	// hint: remember to change event through `store.dispatch`
	var incrementBy = 0;
	for(var a = 0 ; a < store.state.generators.length ; a++){
		console.log('Generator Amount',store.state.generators.length);
		console.log('game js', store.state.generators[a].name);
		/*if(store.state.generators[i].type == 'autonomous'){
			incrementBy += store.state.generators[i].quantity * store.state.generators[i].rate;
		}*/
		incrementBy += store.state.generators[a].quantity * store.state.generators[a].rate;
	}
	store.dispatch({
		type: 'INCREMENT',
		payload: incrementBy
	});


	// TODO: triggers stories from story to display state if they are passed
	//       the `triggeredAt` points
	// hint: use store.dispatch to send event for changing events state
	console.log('Story Amount', store.state.story.length);
	for(var i = 0 ; i < store.state.story.length ; i++){
		store.dispatch({
			type: 'CHECK_STORY'
		});
	}


	// recursively calls loop method every second
	setTimeout(loop.bind(this, store), interval);
}

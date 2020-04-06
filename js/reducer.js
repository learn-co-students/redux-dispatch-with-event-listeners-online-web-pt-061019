// add code snippets from README
let state = {count: 0}
 
function reducer(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}
function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
  }

// reducer({count: 0}, {type: 'INCREASE_COUNT'});
// dispatch({type: 'INCREASE_COUNT'})
dispatch({type: '@@INIT'})

let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})
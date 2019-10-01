import React, { useReducer } from 'react';
import { render } from 'react-dom';
import CountReducer, {initialState} from './src/reducer/CountReducer';

function App () {
  const [state, dispatch] = useReducer(CountReducer, initialState);
  return(
    <div>
    {console.log(state)}
      <div>
          <div>{ state.count1 }</div>
          <button onClick={ () => dispatch({type:'ADD_1'})}>Add</button>
          <button onClick={ () => dispatch({type:'DELETE_1'})}>Delete</button>
          <button onClick={ () => dispatch({type:'RESET_1', count:0})}>Reset</button>
      </div>
      <div>
          <div>{ state.count2 }</div>
          <button onClick={ () => dispatch({type:'ADD_2'})}>Add</button>
          <button onClick={ () => dispatch({type:'DELETE_2'})}>Delete</button>
          <button onClick={ () => dispatch({type:'RESET_2', count:0})}>Reset</button>
      </div>
    </div>
  )
}
render(<App />, document.getElementById('root'));

import React, { useReducer } from 'react';
const initialState ={
    count: 0,
    name: "",
    id: new Date().getTime().toString()
}
const ACTIONS ={
    INCREMENT: 'increase',
    DECREMENT: 'decrease'
};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return {count: state.count - 1}
        default:
            return state
    }
}
const Testing = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [people, setPeople] = useState([]);
    const increment = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.INCREMENT})
    }
    const decrement = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.DECREMENT})
    }

    // setPeople([...people, {initialState}])

    return (
    <div>
      <form>
        <input type="text" />
        <button onClick={decrement}>minus one</button>
        <span>{state.count}</span>
        <button onClick={increment}>plus one</button>
      </form>

      {/* <div>
        <div>{initialState.name}</div>
      </div> */}
    </div>
  );
}

export default Testing;

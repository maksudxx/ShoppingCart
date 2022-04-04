import React from "react";
import { useReducer } from "react";

const initialState = { contador: 0 };

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  INCREMENT_2: "INCREMENT_2",
  DECREMENT_2: "DECREMENT_2",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.RESET:
      return initialState;
    case TYPES.INCREMENT_2:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT_2:
      return { contador: state.contador - action.payload };
    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar2 = () => dispatch({ type: TYPES.INCREMENT_2, payload: 2 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar2 = () => dispatch({ type: TYPES.DECREMENT_2, payload: 2 });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    <div>
      <h2>Contador reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={sumar2}>sumar 2</button>
        <button onClick={reset}>0</button>
        <button onClick={restar2}>Restar 2</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;

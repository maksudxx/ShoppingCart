import React from "react";
import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import { contadorReducer, initialState } from "../reducer/contadorReducer";

const ContadorMejorado = () => {

  //modularizamos al useReducer
  const [state, dispatch] = useReducer(contadorReducer, initialState);
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar2 = () => dispatch({ type: TYPES.INCREMENT_2, payload: 2 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar2 = () => dispatch({ type: TYPES.DECREMENT_2, payload: 2 });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    <div>
      <h2>Contador mejorado reducer</h2>
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

export default ContadorMejorado;

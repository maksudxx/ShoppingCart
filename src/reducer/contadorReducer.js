import {TYPES} from '../actions/contadorActions'
export const initialState = { contador: 0 };
export function contadorReducer(state, action) {
    
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
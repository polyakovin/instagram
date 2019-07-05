import actionNames from '../actions/actionNames.js';

const counter = (state = {}, action) => {
  switch (action.type) {
    case actionNames.INCREMENT: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case actionNames.ZERO: {
      return {
        ...state,
        value: 0,
      };
    }
    case actionNames.DECREMENT: {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    default: {
      return state;
    }
  }
};


export default counter ;
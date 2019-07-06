import actionNames from '../actions/actionNames.js';

const photos = (state = {}, action) => {
  switch (action.type) {
    case actionNames.ADD_LIKE: {
      const photo  = state[action.index];
      return [
        ...state.slice(0, action.index),
        {
          ...photo,
          likesAmount: photo.likesAmount + 1
        },
        ...state.slice(action.index + 1),
      ];
    }
    default: {
      return state;
    }
  }
};


export default photos ;
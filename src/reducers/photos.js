import actionNames from '../actions/actionNames.js';

const photos = (state = {}, action) => {
  console.log("bla bla bla")
  switch (action.type) {
    case actionNames.ADD_LIKE: {
      const photo  = state[action.index];
      console.log([
        ...state.slice(0 , action.index - 1),
        {
          ...photo,
          likesAmount : photo.likesAmount+1
        },
        ...state.slice(action.index + 1),
      ]);
      return [
        ...state.slice(0 , action.index - 1),
        {
          ...photo,
          likesAmount : photo.likesAmount+1
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
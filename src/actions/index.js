import actionNames from './actionNames.js';

export const increment = () => ({
  type: actionNames.INCREMENT,
});

export  const zero = () => ({
  type: actionNames.ZERO,
});

export  const decrement = () => ({
  type: actionNames.DECREMENT,
});

export  const addLike = (index) => ({
  type: actionNames.ADD_LIKE,
  index
});
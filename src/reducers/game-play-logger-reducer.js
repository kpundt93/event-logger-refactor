export default (state = {}, action) => {
  const { name, players, winner, id } = action;
  switch (action.type) {
    case 'ADD_GAME':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          players: players,
          winner: winner,
          id: id
        }
      });
    case 'DELETE_GAME':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
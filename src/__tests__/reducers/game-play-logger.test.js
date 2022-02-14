import gamePlayLoggerReducer from '../../reducers/game-play-logger-reducer';

describe('gamePlayLoggerReducer', () => {

  let action;
  const gameData = {
    name: 'Game',
    players: 'Katie & Jeff',
    winner: 'Jeff',
    id: 1
  };

  const currentState = {
    1: {
      name: 'Game',
      players: 'Katie & Jeff',
      winner: 'Jeff',
      id: 1
    },
    2: {
      name: 'Other Game',
      players: 'Katie & Michael',
      winner: 'Katie',
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(gamePlayLoggerReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new game data to mainPlayList', () => {
    const { name, players, winner, id } = gameData;
    action = {
      type: 'ADD_GAME',
      name: name,
      players: players,
      winner: winner,
      id: id
    };

    expect(gamePlayLoggerReducer({}, action)).toEqual({
      [id]: {
        name: name,
        players: players,
        winner: winner,
        id: id
      }
    });
  });

  test('Should successfully delete a game', () => {
    action = {
      type: 'DELETE_GAME',
      id: 1
    };
    expect(gamePlayLoggerReducer(currentState, action)).toEqual({
      2: {
        name: 'Other Game',
        players: 'Katie & Michael',
        winner: 'Katie',
        id: 2
      }
    });
  });
});
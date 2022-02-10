import React from 'react';
import PropTypes from 'prop-types';

function PlayEntryDetail(props){
const {playEntry} = props;

  return(
    <React.Fragment>
      <h2>Game: { playEntry.name}</h2>
      <h3>Players: {playEntry.players}</h3>
      <h3>Winner: {playEntry.winner}</h3>
      <hr />
      <button onClick={ props.onClickingEdit }>Update Game</button>
      <button onClick={()=>props.onClickingDelete(playEntry.id)}>Delete Play</button>
    </React.Fragment>

  );

}
PlayEntryDetail.propTypes = {
  playEntry: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default PlayEntryDetail;
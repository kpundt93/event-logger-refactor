import React from 'react';
import PropTypes from 'prop-types';
import PlayEntry from './PlayEntry'

function PlayList(props){
  return(
    <React.Fragment>
      {props.playList.map((playEntry) =>
      <PlayEntry 
        whenGameClicked = { props.onPlaySelection }  
        name= {playEntry.name} 
        players={playEntry.players} 
        winner= {playEntry.winner} 
        id={playEntry.id} 
        key={playEntry.id} />
      )}
    </React.Fragment>

  )
}

PlayList.propTypes = {
  playList: PropTypes.array,
  onPlaySelection: PropTypes.func
}

export default PlayList;
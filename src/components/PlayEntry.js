import React from "react";
import PropTypes from "prop-types";

function PlayEntry(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenGameClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Players: {props.players}</p>
        <p>Winner: {props.winner}</p>
      </div>
    </React.Fragment>
  );
}

PlayEntry.propTypes = {
  name: PropTypes.string,
  players: PropTypes.string,
  winner: PropTypes.string,
  id: PropTypes.string,
  whenGameClicked: PropTypes.func
};

export default PlayEntry;
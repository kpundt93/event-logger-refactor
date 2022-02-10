import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm"

function NewPlayEntryForm(props) {
  function handleNewPlayEntryFormSubmission(event) {
    event.preventDefault();
    props.onNewPlayEntryCreation({
      name: event.target.name.value,
      players: event.target.players.value,
      winner: event.target.winner.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPlayEntryFormSubmission}
        buttonText="Add Game" />
    </React.Fragment>
  );

 
}

NewPlayEntryForm.propTypes = {
  onNewPlayEntryCreation: PropTypes.func

};

export default NewPlayEntryForm;
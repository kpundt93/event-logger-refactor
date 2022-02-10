import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPlayEntryForm(props) {
  const { playEntry } = props;

  function handleEditPlayEntryFormSubmission(event) {
    event.preventDefault();
    props.onEditPlay({
      name: event.target.name.value,
      players: event.target.players.value,
      winner: event.target.winner.value,
      id: playEntry.id
    });
  }

  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPlayEntryFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}

EditPlayEntryForm.propTypes = {
  playEntry: PropTypes.object,
  onEditPlay: PropTypes.func
};

export default EditPlayEntryForm;
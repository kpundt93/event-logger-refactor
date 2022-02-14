import React from 'react';
import NewPlayEntryForm from './NewPlayEntryForm';
import PlayList from './PlayList';
import PlayEntryDetail from './PlayEntryDetail';
import EditPlayEntryForm from './EditPlayEntryForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PlayControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPlay: null,
      editing: false,
      counter: 0
    };
  } 
  
  handleChangingSelectedPlay = (id) => {
    const selectedPlay = this.props.mainPlayList[id];
    this.setState({selectedPlay: selectedPlay});
  }
  
  handleDeletingPlay = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_GAME',
      id: id
    }
    dispatch(action)
    this.setState({
      selectedPlay: null,
      counter: this.state.counter-1
    });
  }

  handleEditingPlayInList = (playToEdit) => {
    const { dispatch } = this.props;
    const { id, name, players, winner } = playToEdit;
    const action = {
      type: 'ADD_GAME',
      id: id,
      name: name,
      players: players,
      winner: winner
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPlay: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.state.selectedPlay != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPlay: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewPlayToList = (newPlay) => {
    const { dispatch } = this.props;
    const { id, name, players, winner } = newPlay;
    const action = {
      type: 'ADD_GAME',
      id: id,
      name: name,
      players: players,
      winner: winner
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false, 
      counter: this.state.counter+1
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = <EditPlayEntryForm 
        playEntry = {this.state.selectedPlay} 
        onEditPlay = {this.handleEditingPlayInList} />
      buttonText = "Return to Play List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPlayEntryForm onNewPlayEntryCreation={this.handleAddingNewPlayToList}  />;
      buttonText = "Return to Game Play List";
    } else if (this.state.selectedPlay != null) {
      currentlyVisibleState = <PlayEntryDetail 
        onClickingDelete = {this.handleDeletingPlay}  
        onClickingEdit = {this.handleEditClick} 
        playEntry={this.state.selectedPlay} />
      buttonText = "Return to Game Play List";
    } else {
      currentlyVisibleState = <PlayList playList={this.props.mainPlayList}  onPlaySelection={this.handleChangingSelectedPlay}/>
      buttonText = "Add Play"
    }
    return ( 
    <React.Fragment>
      <div style={{marginBottom:'16px'}}>Total Plays: {this.state.counter}</div>
      {currentlyVisibleState}
      
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}

PlayControl.propTypes = {
  mainPlayList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainPlayList: state
  }
}

PlayControl = connect(mapStateToProps)(PlayControl);

export default PlayControl;

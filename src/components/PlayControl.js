import React from 'react';
import NewPlayEntryForm from './NewPlayEntryForm';
import PlayList from './PlayList';
import PlayEntryDetail from './PlayEntryDetail';
import EditPlayEntryForm from './EditPlayEntryForm';

class PlayControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPlayList: [],
      selectedPlay: null,
      editing: false,
      counter: 0
    };
  } 
  
  handleChangingSelectedPlay = (id) => {
    const selectedPlay = this.state.mainPlayList.filter(play => play.id === id)[0];
    this.setState({selectedPlay: selectedPlay});
  }
  
  handleDeletingPlay = (id) => {
    const newMainPlayList = this.state.mainPlayList.filter(play => play.id !== id);
    this.setState({
      mainPlayList: newMainPlayList,
      selectedPlay: null,
      counter: this.state.counter-1
    });
  }

  handleEditingPlayInList = (playToEdit) => {
    const editedMainPlayList = this.state.mainPlayList
      .filter(play => play.id !== this.state.selectedPlay.id)
      .concat(playToEdit);
    this.setState({
        mainPlayList: editedMainPlayList,
        editing: false,
        selectedPlay: null
      });
  }

  handleEditClick = () => {
    console.log("edit click working")
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

  handleAddingNewPlayToList = (newPlay) =>
  {
    const newMainPlayList = this.state.mainPlayList.concat(newPlay);
    this.setState({mainPlayList: newMainPlayList,
                  formVisibleOnPage: false, 
                  counter: this.state.counter+1});
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = <EditPlayEntryForm 
        playEntry = {this.state.selectedPlay} 
        onEditPlay = {this.handleEditingPlayInList} />
      buttonText = "Return to Play List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPlayEntryForm onNewPlayEntryCreation={this.handleAddingNewPlayToList}  />;
      buttonText = "Return to Game Play List";
    }
    else if (this.state.selectedPlay != null){
      currentlyVisibleState = <PlayEntryDetail 
        onClickingDelete = {this.handleDeletingPlay}  
        onClickingEdit = {this.handleEditClick} 
        playEntry={this.state.selectedPlay} />
      buttonText = "Return to Game Play List";
    }
    else {
      currentlyVisibleState = <PlayList playList={this.state.mainPlayList}  onPlaySelection={this.handleChangingSelectedPlay}/>
      buttonText = "Add Play"
    }
    return ( 
    <React.Fragment>
      <div style={{marginBottom:'16px'}}>Total Plays: {this.state.counter}</div>
      {currentlyVisibleState}
      
      <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
    </React.Fragment>
  );
}

}
export default PlayControl;

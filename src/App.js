import React from 'react';
import PlayersList from './components/PlayersList/PlayersList';
import {connect} from 'react-redux';
import {addPlayer, setInputValue} from './redux/players/players.actions';

function App({addPlayer, setInputValue, inputValue}) {

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <PlayersList />
      <button onClick={addPlayer}>Dodaj igraca</button>
      <input type="text" onChange={handleInputChange} value={inputValue}/>
      <h1>{inputValue}</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    inputValue: state.players.inputValue
  }
}


export default connect(mapStateToProps, {
  addPlayer,
  setInputValue
})(App);

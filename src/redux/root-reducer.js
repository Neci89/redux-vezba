import { combineReducers } from 'redux';
import playerReducer from './players/players.reducer';

export default combineReducers({
    players: playerReducer
})
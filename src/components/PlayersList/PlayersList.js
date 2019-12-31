import React from 'react';
import {connect} from 'react-redux'
import Player from '../Player/Player';

const PlayersList = ({players}) => {
    
    const renderPlayers = () => {
        return players.map(player => {
            return <Player key={player.id} player={player}/>
        })
    }

    return (
        <div>
            {renderPlayers()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        players: Object.values(state.players.players)
    }
}

export default connect(mapStateToProps)(PlayersList);
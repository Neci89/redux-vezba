import React from 'react';
import {setActivePlayer} from "../../redux/players/players.actions";
import {connect} from 'react-redux';

const Player = ({player, setActivePlayer}) => {


    return (
        <div onClick={() => setActivePlayer(player.id)}>
            <h2>{player.playerName}</h2>
            <h4>{player.nick}</h4>
        </div>
    );
};

export default connect(null, {
    setActivePlayer
})(Player);
const INITIAL_STATE = {
    players: {
        1: {id: 1, playerName: "Player1", nick: "Bogi"},
        2: {id: 2, playerName: "Player2", nick: "Zon"},
        3: {id: 3, playerName: "Player3", nick: "Bracala"},
        4: {id: 4, playerName: "Player4", nick: "Lemi"},
    },
    activePlayer: null,
    inputValue: ""
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SET_ACTIVE_PLAYER":
            console.log(action.payload)
            return {
                ...state,
                players: {
                    ...state.players,
                    [action.payload]: {
                        ...state.players[action.payload],
                        nick: "NOVI NICK",
                        playerName: "NOVI NAME"
                    }
                }
            }
        case "ADD_PLAYER": 
           return {
               ...state,
               players: {
                   ...state.players,
                   5: action.payload
               },
           }
        case "SET_INPUT_VALUE":
            return {
                ...state,
                inputValue: action.payload
            }
        default:
            return state;
    }
}

const players = [
    {id: 1, playerName: "Player1", nick: "Bogi"},
    {id: 2, playerName: "Player2", nick: "Zon"},
    {id: 3, playerName: "Player3", nick: "Bracala"},
    {id: 4, playerName: "Player4", nick: "Lemi"}
]
export const setActivePlayer = id => {
    return {
        type: "SET_ACTIVE_PLAYER",
        payload: id
    }
}

export const addPlayer = () => {
    return {
        type: "ADD_PLAYER",
        payload: {
            id: 5,
            playerName: "Player5",
            nick: "Nena"
        }
    }
}

export const setInputValue = value => {
    return {
        type: "SET_INPUT_VALUE",
        payload: value
    }
}
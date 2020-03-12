const user = (state={}, action) => {
    switch(action.type){
        case 'ASSIGN USER':
        return action.user
       default:
           return state
    }
}

export default user;

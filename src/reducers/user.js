const user = (state={}, action) => {
    console.log('user reducer')
    switch(action.type){
        case 'ASSIGN USER':
        return action.user
       default:
           return state
    }
}

export default user;

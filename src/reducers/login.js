const loggedin = (state=false, action) => {
  console.log('login reducer')
    switch(action.type){
       case 'LOG IN':
       return true
       case 'LOG OUT':
       return false
       default:
           return state
    }
}

export default loggedin;

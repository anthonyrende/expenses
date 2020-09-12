// State changes in response to actions to context in component
export default (state, action) => {
    // console.log('action: ', action.type)
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                // Note: we're not changing state, we're making a NEW state to send down
                // spreading in ...state sends all of current state
                ...state, 
                // what we're chaning is our transactions value, all the transactions NOT deleted 
                transactions: state.transactions.filter(transaction => transaction.id != action.payload)
            }
        default:
            return state;
    }
}
import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        {id: 1, text: 'Book', amount: 6},
        {id: 2, text: 'Napkin holder', amount: -5}
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions (make calls to AppRudcer)
    function deleteTransaction(id) {
        // Takes a transaction Id
        // Dispatch to our Reducer
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    // Provides state to components
    return (
        <GlobalContext.Provider value={{
            // Pass these down to provider so we can consume 
            transactions: state.transactions,
            deleteTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    );
}
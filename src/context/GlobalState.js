import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        {id: 1, text: 'Book', amount: -5},
        {id: 2, text: 'Napkin holder', amount: -5}
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Provides state to components
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            { children }
        </GlobalContext.Provider>
    );
}
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    // If transaction is - or + 
    const sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        // TODO: Class ternary is dynamically positive o negative 
        <li>
        {transaction.text}<span> {sign} ${Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // Grab all transaction amounts into amounts
    const amounts = transactions.map(transaction => transaction.amount)
    // Add them to a fixed decimal place of .2
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div>
            <h4>Balance{amounts}</h4>
            <h1>${total}</h1>
        </div>
    )
}

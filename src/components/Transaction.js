import React from 'react'

export const Transaction = ({ transaction }) => {
    // If transaction is - or + 
    const sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        // TODO: Class ternary is dynamically positive o negative 
        <li>
        {transaction.text}<span> {sign} ${Math.abs(transaction.amount)}</span><button>x</button>
        </li>
    )
}

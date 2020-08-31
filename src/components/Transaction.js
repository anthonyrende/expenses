import React from 'react'

export const Transaction = ({ transaction }) => {
    return (
        <li>
        {transaction.text} <span>-$5</span><button>x</button>
        </li>
    )
}

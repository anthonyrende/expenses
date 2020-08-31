import React, { useContext } from 'react'
import { GlobalState, GlobalContext } from "../context/GlobalState"

export const TransactionList = () => {
    const  {transactions} = useContext(GlobalContext);

    // console.log(context.transactions);

    return (
        <div>
            <h3>History</h3>
                <ul>
                {transactions.map(transaction => (<li>
                    {transaction.text} <span>-$5</span><button>x</button></li>))}
                </ul>
        </div>
    )
}

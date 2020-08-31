import React, { useContext } from 'react'
import { GlobalState, GlobalContext } from "../context/GlobalState"
import { Transaction } from './Transaction'


export const TransactionList = () => {
    // Destructuring transaction context
    const { transactions } = useContext(GlobalContext);

    // console.log(context.transactions);

    return (
        <div>
            <h3>History</h3>
                <ul>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
                </ul>
        </div>
    )
}

import React, { useContext } from 'react'
import { GlobalState, GlobalContext } from "../context/GlobalState"
import { Transaction } from './Transaction'

import { Icon, Input, List, Container, Header, FlexboxGrid, Whisper, Tooltip, Button, InputGroup } from 'rsuite'


export const TransactionList = () => {
    // Destructuring transaction context
    const { transactions } = useContext(GlobalContext);

    // console.log(context.transactions);
    const renderIcon = (transaction) => {
        return transaction < 0 ? "minus-square"  : 'plus-square'        
      }
      const renderColor = (transaction) => {
       const styleObj = {
            // fontSize: 14,
            color:  transaction < 0 ? 'red' : 'green',
            // textAlign: "center",
            // borderRight: transaction < 0 ? "5 solid red":  "5 solid green";
        }
        return styleObj
      }
    return (
        <Container style={{marginBottom: '5%'}}>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={12}>
                    <h3>Recent History</h3>
                        <List hover>
                        {transactions.map(transaction => (
                            <List.Item>
                                <Transaction key={transaction.id} transaction={transaction}/>
                            </List.Item>
                                )
                            )
                        }
                        </List>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Container>
    )
}

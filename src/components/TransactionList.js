import React, { useContext } from 'react'
import { GlobalState, GlobalContext } from "../context/GlobalState"
import { Transaction } from './Transaction'

import { Icon, Panel, List, Container, Header, FlexboxGrid, Whisper, Tooltip, Button, InputGroup, Divider } from 'rsuite'


export const TransactionList = () => {
    // Destructuring transaction context
    const { transactions } = useContext(GlobalContext);

    // console.log(context.transactions);
    const renderIcon = (transaction) => {
        return transaction < 0 ? "minus-square-o"  : 'plus-square-o'        
      }
      const renderColor = (transaction) => {
       const styleObj = {
            // fontSize: 14,
            borderLeft:  transaction < 0 ? '12px solid #f44336' : '12px solid #5ea83e',
            borderRadius:7,
            // textAlign: "center",
            // borderRight: transaction < 0 ? "5 solid red":  "5 solid green";
        }
        return styleObj
      }
    return (
        <Container style={{marginBottom: '5%'}}>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={12}>
                    <h4 style={{textAlign:'center'}}>Recent History</h4>
                    {transactions.map(transaction => (
                        <>
                        <List hover>
                            <List.Item  style={renderColor(transaction.amount)}>
                                <Transaction key={transaction.id} transaction={transaction}/>
                            </List.Item>
                            </List>
                            </>
                                )
                            )
                        }
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Container>
    )
}

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { ButtonGroup, ButtonToolbar, Icon, Container, Header, FlexboxGrid, Whisper, Tooltip, Button, InputGroup } from 'rsuite'

// const styleCenter = {
//     // display: 'flex',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // height: '60px'
//   };
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    console.log(transaction)
    // If transaction is - or + 
    const renderTransaction = (transaction) => {

        return (
          <span
            style={{
            //   paddingRight: 15,
              color: transaction < 0 ? 'red' : 'green'
            }}
          >
            <span>{transaction > 0 ? <Icon icon="plus"/> : <Icon icon="minus"/>}${Math.abs(transaction) }</span>
          </span>
        );
      }
    // console.log(context.transactions);
    const renderIcon = (transaction) => {
        return transaction < 0 ? "minus-square-o"  : 'plus-square-o'
      }
      const renderColor = (transaction) => {
       const styleObj = {
            paddingRight: "15%",
            color:  transaction < 0 ? '#eb3626' : '#5ea83e',
            // textAlign: "center",
            // borderRight: transaction < 0 ? "5 solid red":  "5 solid green";
        }
        return styleObj
      }
    return (
        <Container>
        <FlexboxGrid justify="space-between" >
            <span style={{paddingLeft:"5%"}}>
                {renderTransaction(transaction.amount)}
            </span>
                {transaction.text}
                <ButtonToolbar>
                    <ButtonGroup vertical style={{margin:5}}>
                        <Button active size='xs' appearance='ghost'>Edit</Button>
                        <Button active size='xs' onClick={() => deleteTransaction(transaction.id)} appearance='ghost'>Delete</Button>
                    </ButtonGroup>
                </ButtonToolbar>
        </FlexboxGrid>
        </Container>
    )
}

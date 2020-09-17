import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Form, Icon,  Divider, Container, Header, FlexboxGrid, Whisper, Tooltip, Button, InputGroup } from 'rsuite'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    // Filter positive integers
    .filter(item => item > 0)
    // Add them
    .reduce((acc,item) => (acc += item), 0)
    .toFixed(2)
  
  // Filter negatiev integers, add them
  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2)

    return (
        <Container>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item>
              <h4 style={{color:"#5ea83e"}}>Income</h4>
                <p><Icon icon="plus" style={{marginRight:5}}/>{income}</p>
          </FlexboxGrid.Item>

            <FlexboxGrid.Item>
              <h4 style={{color:"#eb3626"}}>Expenses</h4>
                <p><Icon icon="minus" style={{marginRight:5}}/>{expense}</p>
            </FlexboxGrid.Item>
          </FlexboxGrid>
         <Divider/>
        </Container>
    )
}

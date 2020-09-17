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
              <h4>Income</h4>
                <p><Icon icon="plus"/>{income}</p>
          </FlexboxGrid.Item>

            <FlexboxGrid.Item>
              <h4>Expenses</h4>
                <p><Icon icon="minus"/>{expense}</p>
            </FlexboxGrid.Item>
          </FlexboxGrid>
         <Divider/>
        </Container>
    )
}

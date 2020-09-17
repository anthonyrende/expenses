import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Form, Icon,  Divider, Container, Header, FlexboxGrid, Whisper, Tooltip, Button, InputGroup } from 'rsuite'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // Grab all transaction amounts into amounts
    const amounts = transactions.map(transaction => transaction.amount)
    // Add them to a fixed decimal place of .2
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <Container>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item>
                    <h4>Total Balance</h4>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        <Container>
            <FlexboxGrid justify="center">
                <h1>${total}</h1>
            </FlexboxGrid>
        </Container>
        </Container>
    )
}

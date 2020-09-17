import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Form, Input,  Container, Header, InputNumber, Content, Button, InputGroup } from 'rsuite'

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0);

    const onSubmit = (event) => {
      // console.log(event)
      // event.preventDefault()
      
      const newTransaction = () => {
        return {
          id: Math.floor(Math.random() * 100000),
          text,
          // +amount keeps amount an integer
          amount: +amount
        }
      }
      addTransaction(newTransaction())
    }
  //   <InputGroup inside style={styles}>
  //   <InputGroup.Addon>$</InputGroup.Addon>
  //   <Input />
  //   <InputGroup.Addon>.00</InputGroup.Addon>
  // </InputGroup>
  // <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
    return (
        <>
        <Container>
        <Header>
        <h3>Add new transaction</h3>
        </Header>
        <Form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <InputGroup value={text}  onChange={(e) => setText(e.target.value)}>
            <Input placeholder="Enter text..." />
            </InputGroup>
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            
            <InputGroup  value={amount} onChange={(e) => setAmount(e.target.value)} inside>
            <InputGroup.Addon>$</InputGroup.Addon>
            <Input placeholder="Enter amount..." />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
          </div>
          <Button className="btn">Add transaction</Button>
        </Form>
        </Container>
      </>
    )
}

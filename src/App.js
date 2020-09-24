import React from 'react';
import { BrowserRouter as Router } from 'react-dom'

// Components
import { NavBar, Main } from "./components/NavBar.js"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

// Context
import { GlobalProvider } from "./context/GlobalState"

//Styling
import { Content, FlexboxGrid, Panel } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'
// import 'rsuite/dist/styles/rsuite-dark.css'

function App() {
  return (
    <GlobalProvider>
    <NavBar />
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12} md={6}>
             <Main />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </GlobalProvider>
  );
}

export default App;

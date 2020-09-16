import React from 'react';

// Components
import Nav from "./components/Nav.js"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

// Context
import { GlobalProvider } from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={createTheme()}>
          <Nav />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;

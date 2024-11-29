import "./App.css";
import { AccountSummary } from "./AccountSummary";
import { TransactionsList } from "./TransactionsList";
import { AddTransaction } from "./AddTransaction";
import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";

function App() {
  const [accountDetails, setAccountDetails] = useState({
    name: "Senthil",
    accountNumber: "1234567890",
    balance: 1000,
  });


  const updateBalance = (value) => {
    setAccountDetails({ ...accountDetails, balance: value });
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bank Account Dashboard</Navbar.Brand>
        </Container>
      </Navbar>
      <AccountSummary summary={accountDetails}/>
      <TransactionsList />
      <AddTransaction balance={accountDetails.balance} updateBalance={updateBalance}/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    setTransactions([
      {
        id: 1,
        date: "2024-01-01",
        description: "Transaction 1",
        amount: 100,
        type: "debit",
      },
      {
        id: 2,
        date: "2024-01-02",
        description: "Transaction 2",
        amount: 200,
        type: "debit",
      },
      {
        id: 3,
        date: "2024-01-03",
        description: "Transaction 3",
        amount: 300,
        type: "credit",
      },
      {
        id: 4,
        date: "2024-01-04",
        description: "Transaction 4",
        amount: 400,
        type: "credit",
      },
      {
        id: 5,
        date: "2024-01-05",
        description: "Transaction 5",
        amount: 500,
        type: "debit",
      },
    ]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            {transactions.map((transaction) => (
              <div key={transaction.id}>
                <div className="d-flex justify-content-between">
                  <div>
                    <div>{transaction.date}</div>
                    <div>{transaction.description}</div>
                  </div>
                  <div className={transaction.type === 'debit' ? 'debit' : 'credit'}>{transaction.amount}</div>
                </div>
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

import { Form, Card, Button } from "react-bootstrap";
import { useState } from "react";

export const AddTransaction = (props) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState();

  const handleChange = (value) => {
    console.log(value);
    if (value > 0) {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "debit" && props.balance >= amount) {
      props.updateBalance(props.balance - amount);
    } else if (type === "credit") {
      props.updateBalance(props.balance + amount);
    } else {
      alert("Insufficient balance");
    }
  };

  return (
    <div className="d-flex justify-content-center p-5">
      <Card>
        <Card.Body>
          <Card.Text>
            <form onSubmit={handleSubmit}>
              <div>
                <Form.Label htmlFor="inputPassword5">To</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Please Select</option>
                  <option value="1">Kumar</option>
                  <option value="2">John</option>
                </Form.Select>
              </div>
              <div>
                <Form.Label htmlFor="inputPassword5">Description</Form.Label>
                <Form.Control type="text" id="description" />
              </div>
              <div>
                <Form.Label htmlFor="inputPassword5">Amount</Form.Label>
                <Form.Control
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              <div>
                <Form.Label htmlFor="inputPassword5">Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Please Select</option>
                  <option value="debit">Debit</option>
                  <option value="credit">Credit</option>
                </Form.Select>
              </div>
              <div className="mt-4">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

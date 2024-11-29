import { Card } from "react-bootstrap";

export const AccountSummary = (props) => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            <div>
              <h6>
                Account Holder Name: <strong>{props.summary.name}</strong>
              </h6>
              <h6>
                Account Number: <strong>{props.summary.accountNumber}</strong>
              </h6>
              <h6>
                Balance: <strong>{props.summary.balance}</strong>
              </h6>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

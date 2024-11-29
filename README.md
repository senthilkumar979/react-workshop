# React JS: Bank Account Dashboard


Develop a simple Bank Account Dashboard using React. This single-page application should simulate basic bank operations and display account details. Use functional components, state management, API calls, and event handling to meet the following requirements.


# Features:
## Account Summary Component
 - Display account holder's name, account number, and balance.
 - Use props to pass this data to the component.
## Transaction List Component
 - Render a list of transactions (mock data or fetched from an API). Each transaction should display:
    Date
    Description
    Amount
    Type (Credit/Debit)
## Add Transaction Form Component
  Create a form to add a new transaction.
  Use controlled inputs for fields:
  To (Some person name, selectable via dropdown)
  Description
  Amount
  Type (Credit/Debit, selectable via dropdown)
  Handle form submission and update the transaction list and balance.
  Validate that the amount is a positive number.
  Balance Update and Recalculation
  Ensure that the account balance updates dynamically when a transaction is added.

## API Simulation
    Use useEffect to fetch initial transaction data from a mock API.
    Use useState to store and manage transactions.
    Event Handling
    Handle button clicks for adding a transaction.
    Display a confirmation message upon successful addition of a transaction.

## Guidelines:
 ### HTML Structure
    Include a header for the dashboard
    Organize components in a clean, responsive layout.
### State Management
    Use useState to manage form input, transactions, and account balance.
### Lifecycle Management
    Use useEffect to fetch data and update components on initial render.
### Styling
    Add basic styles using CSS for a clean and user-friendly design.
    If you are comfortable with bootstrap, use react-bootstrap

# Example Structure:

Bank Account Dashboard
------------------------
| Account Summary        |
|------------------------|
| Transactions List      |
|------------------------|
| Add Transaction Form   |
--------------------------


## Deliverables:
    A functional single-page React application with all components rendered on the same page.
    Properly commented code explaining state, props, and API integration.
    A demo of adding a transaction and dynamically updating the balance and transaction list.
    
    After completing the code, commit the code and create a Pull Request out of it for review.
    Make sure you follow some methodology for problem solving and attach the sheet you used



import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021,2,28);
  const expenseTitle = "Car Insurance";
  const expensePrice = 294.21;
    return (

    <div className='main'>
      <div>{expenseDate.toISOString()}</div>
      <div>
        <h2>{expenseTitle}</h2>
        <div>{expensePrice}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

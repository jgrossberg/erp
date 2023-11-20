import React, { useState, useEffect } from 'react';

function JournalEntryRow(props) {
  console.log(props)
  let accountSelectorOptions = []
  if (props.availableAccounts) {
    accountSelectorOptions = Array.from(props.availableAccounts).map(function(item) {
      return (
        <option key={item.account_number}>
          {item.account_number} - {item.account_name}
        </option>
      )
  })
  }

  return (
    <tr>
      <td>
          <select className="table account-select">
            {accountSelectorOptions}
          </select>
      </td>
      <td><input className="table amount-debit" /></td>
      <td><input className="table amount-credit" /></td>
    </tr>
  )
}

 function JournalEntryForm(props) {
  const [availableAccounts, setAvailableAccounts] = useState(null);
  const [error, setError] = useState(null);
  const [debits, setDebits] = useState(0);
  const [credits, setCredits] = useState(0);
  
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/accounts/`)
      .then(response => response.json())
      .then(data => setAvailableAccounts(data));
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    let inputAccounts = []
    let inputDebits = []
    let inputCredits = []

    const selectorElements = document.getElementsByClassName('account-select')
    const debitElements = document.getElementsByClassName('amount-debit')
    const creditElements = document.getElementsByClassName('amount-credit')


    for (let el of selectorElements) { inputAccounts.push(el.value) }  
    for (let el of debitElements) { inputDebits.push(Number(el.value)) }  
    for (let el of creditElements) { inputCredits.push(Number(el.value)) }  
    
    function getSum(total, num) {return total + num}
    var debits = inputDebits.reduce(getSum)
    var credits = inputCredits.reduce(getSum)
    let error = (debits === credits ? '' : 'Debits and credits must net to $0.00')

    setError(error)
    setDebits(debits)
    setCredits(credits)
    
  }

  return ( 
    <form onBlur={handleChange} id="journalEntryForm">
        <table align="center" className="table">
          <thead>
            <tr className="table-headers">
              <th scope="col">Account Name</th>
              <th scope="col">Debit</th>
              <th scope="col">Credit</th>
            </tr>
          </thead>
          <tbody>
            <JournalEntryRow availableAccounts={availableAccounts} />
            <JournalEntryRow availableAccounts={availableAccounts} />
            
          </tbody>
          <tfoot>
            <tr className="total">
              <td>&nbsp;</td>
              <td>{debits || 0}</td>
              <td>{credits || 0}</td>
            </tr>
          </tfoot>
        </table>

        <p>{error}&nbsp;</p>

        {/* <button type="button" onClick={addRow}>+1</button>&nbsp;
        <button type="submit" onClick={handleFormSubmit}>Submit</button> */}
      </form>)
}

export default JournalEntryForm




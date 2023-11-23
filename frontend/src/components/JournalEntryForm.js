import React, { useState, useEffect } from "react";

import JournalEntryRow from "./JournalEntryRow";

const getTransactionLines = () => {
  const tableRows = [...document.getElementsByClassName("transaction-row")]
  let res = tableRows.map((row) => {
    const account = row.getElementsByClassName("account-select")[0].selectedOptions[0].value
    const amount = row.getElementsByClassName("amount-debit")[0].value - row.getElementsByClassName("amount-credit")[0].value
    return {
      account: account,
      amount: amount
    }
  })

  return res
}

const createRowsFromLegs = (accountSelectorOptions, legs) => {
  return legs.map((leg, index) => 
      <JournalEntryRow
        key={index}
        accountId={leg.accountId}
        availableAccounts={accountSelectorOptions}
        debit={leg.amount > 0 ? leg.amount : 0}
        credit={leg.amount < 0 ? leg.amount : 0}
      />
  )
};

function JournalEntryForm(props) {
  const [availableAccounts, setAvailableAccounts] = useState(null);
  const [transactions, setTransactions] = useState([])
  const [error, setError] = useState(null);

  console.log('the template is: ' + props.template)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/accounts/`)
      .then((response) => response.json())
      .then((data) => setAvailableAccounts(data));

      setTransactions([
        {
          accountNumber: "1010",
          debit: 500,
          credit: 0,
          key: 1
        },
        {
          accountNumber: "4010",
          debit: 0,
          credit: 500,
          key: 2
        }
      ]);
    
  }, []);

  const handleFormSubmit = () => {
    const date = document.getElementsByClassName("date-input")[0].value
    const memo = document.getElementsByClassName("memo-input")[0].value
    const datedTransactions = transactions.map((txn) =>  {
      txn['entry_date'] = date
      return {
        txn 
      }
    })

    
    console.info({
      "memo" : memo,
      "transactions": datedTransactions
    });
  };

  const addRow = () => {
    let transactions = getTransactionLines()
    const newKey = transactions.length
    transactions = transactions.concat({account: '1001', amount: 0, key: newKey})
    console.log(transactions)
    setTransactions(transactions)
  }

  const handleChange = (event) => {
    event.preventDefault();   
    let transactions = getTransactionLines()
    let transactionSum = transactions.reduce((total, txn) => {return total + txn.amount}, 0)
    let error = transactionSum === 0 ? "" : "Debits and credits must net to $0.00"
    setError(error);
    setTransactions(transactions)
  };


  // const journalEntryRows = createRowsFromTransactions(availableAccounts, transactions);
  const journalEntryRows = createRowsFromLegs(availableAccounts, props.legs);

  return (
    <form onBlur={handleChange} id="journalEntryForm">
      <label htmlFor="memo"> Memo:</label>
      <input id="memo" className="memo-input" type="text" /><br/><br/>

      <label htmlFor="date">Date</label>
      <input id="date" className="date-input" type="date" />
      <br/><br/>
      <table align="center" className="table">
        <thead>
          <tr className="table-headers">
            <th scope="col">Account Name</th>
            <th scope="col">Debit</th>
            <th scope="col">Credit</th>
          </tr>
        </thead>
        <tbody>{journalEntryRows}</tbody>
      </table>

      <p>{error}&nbsp;</p>

      <button type="button" onClick={addRow}>+1</button>&nbsp;
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
}


export default JournalEntryForm;

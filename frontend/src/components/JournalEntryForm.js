import React, { useState, useEffect } from "react";

import JournalEntryRow from "./JournalEntryRow";

const getTransactionLines = () => {
  const tableRows = [...document.getElementsByClassName("transaction-row")]
  let res = tableRows.map((row) => {
    const amount = row.getElementsByClassName("amount-debit")[0].value - row.getElementsByClassName("amount-credit")[0].value
    return {
      account: row.getElementsByClassName("account-select")[0].value,
      amount: amount
    }
  })

  return res
}

const createRowsFromTransactions = (accountSelectorOptions, transactions) => {
  console.log("transactions: ")
  console.log(transactions)
  return transactions.map((txn) => {
    if (txn.amount >= 0) {
      return (
      <JournalEntryRow
        key={txn.accountNumber}
        availableAccounts={accountSelectorOptions}
        debit={txn.debit}
        credit={txn.credit}
      />
    );
  } else {
    return (
      <JournalEntryRow
        key={txn.accountNumber}
        availableAccounts={accountSelectorOptions}
        debit={txn.debit}
        credit={txn.credit}
      />)
  }})
};

function JournalEntryForm(props) {
  const [availableAccounts, setAvailableAccounts] = useState(null);
  const [transactions, setTransactions] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/accounts/`)
      .then((response) => response.json())
      .then((data) => setAvailableAccounts(data));
  }, []);



  const handleChange = (event) => {
    event.preventDefault();   
    let transactions = getTransactionLines()
    let transactionSum = transactions.reduce((total, txn) => {return total + txn.amount}, 0)
    let error = transactionSum === 0 ? "" : "Debits and credits must net to $0.00"
    setError(error);
    setTransactions(transactions)

    console.log(transactions)
  };

  let template = [
    {
      accountNumber: "1010",
      debit: 500,
      credit: 0,
    },
    {
      accountNumber: "4010",
      debit: 0,
      credit: 500,
    },
    {
      accountNumber: "4011",
      debit: 0,
      credit: 500,
    },
  ];

  const journalEntryRows = createRowsFromTransactions(availableAccounts, template);

  return (
    <form onBlur={handleChange} id="journalEntryForm">
      <label htmlFor="memo"> Memo:</label>
      <input id="memo" type="text" /><br/><br/>

      <label htmlFor="date">Date</label>
      <input id="date" type="date" />
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

      {/* <button type="button" onClick={addRow}>+1</button>&nbsp; */}
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
}

const handleFormSubmit = () => {
  let accounts = document.getElementsByClassName("account-select");
  console.info(accounts);
};

export default JournalEntryForm;

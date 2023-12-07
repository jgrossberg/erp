import React, { useState, useEffect } from "react";

import JournalEntryRow from "./JournalEntryRow";

const getTransactionLines = () => {
  const tableRows = [...document.getElementsByClassName("transaction-row")];
  let res = tableRows.map((row) => {
    const account =
      row.getElementsByClassName("account-select")[0].selectedOptions[0].value;
    const amount =
      row.getElementsByClassName("amount-debit")[0].value -
      row.getElementsByClassName("amount-credit")[0].value;
    return {
      account: account,
      amount: amount,
    };
  });

  return res;
};

function JournalEntryForm({transactions, onChange}) {
  const [availableAccounts, setAvailableAccounts] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/accounts/`)
    .then((response) => response.json())
    .then((data) => {
      setAvailableAccounts(data);
    })
  }, []);


  const handleFormSubmit = () => {
    const date = document.getElementsByClassName("date-input")[0].value;
    const memo = document.getElementsByClassName("memo-input")[0].value;
    const datedTransactions = transactions.map((txn) => {
      txn["entry_date"] = date;
      return {
        txn,
      };
    });

    console.log(date,  memo,  datedTransactions);
  };

  const createRowsFromLegs = (accountSelectorOptions, legs) => {
    console.log('creating rows from the transaction legs: ' + JSON.stringify(legs))
    return legs
      .sort((leg1, leg2) =>
        leg1.amount < leg2.amount ? 1 : leg1.amount > leg2.amount ? -1 : 0,
      )
      .map((leg, index) => (
        <JournalEntryRow
          key={index}
          accountId={leg.accountId}
          availableAccounts={accountSelectorOptions}
          debit={leg.amount > 0 ? leg.amount : 0}
          credit={leg.amount < 0 ? leg.amount : 0}
          handleInputChange={handleTransactionsChange}
        />
      ));
  };

  const handleTransactionsChange = () => {
    let transactions = getTransactionLines();
    onChange(transactions)
  }

  const addRow = () => {
    let transactions = getTransactionLines();
    const newKey = transactions.length;
    transactions = transactions.concat({
      account: "1001",
      amount: 0,
      key: newKey,
    });
    onChange(transactions);
  };

  const handleChange = () => {
    let transactions = getTransactionLines();
    let transactionSum = transactions.reduce((total, txn) => {
      return total + txn.amount;
    }, 0);
    let error =
      transactionSum === 0 ? "" : "Debits and credits must net to $0.00";
    setError(error);
    onChange(transactions);
  };

  const journalEntryRows = createRowsFromLegs(availableAccounts, transactions);

  return (
    <form onBlur={handleChange} id="journalEntryForm">
      <label htmlFor="memo"> Memo:</label>
      <input id="memo" className="memo-input" type="text" />
      <br />
      <br />
      <label htmlFor="date">Date</label>
      <input id="date" className="date-input" type="date" />
      <br />
      <br />
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
      <button type="button" onClick={addRow}>
        +1
      </button>
      &nbsp;
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
}

export default JournalEntryForm;

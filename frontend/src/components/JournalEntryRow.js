import React from "react";

function JournalEntryRow(props) {
  let accountSelectorOptions = [];
  if (props.availableAccounts) {
    accountSelectorOptions = Array.from(props.availableAccounts).map(
      function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.account_number} - {item.account_name}
          </option>
        );
      },
    );
  }

  return (
    <tr className="transaction-row">
      <td>
        <select className="table account-select">
          {accountSelectorOptions}
        </select>
      </td>
      <td>
        <input className="table amount-debit" type="number" step=".01" defaultValue={props.debit} />
      </td>
      <td>
        <input className="table amount-credit" type="number" step=".01" defaultValue={props.credit} />
      </td>
    </tr>
  );
}

export default JournalEntryRow;

import React from "react";


function JournalEntryRow({ handleInputChange, accountId, availableAccounts, debit, credit}) {
  let accountSelectorOptions;

  if (availableAccounts) {
    accountSelectorOptions = Array.from(availableAccounts).map(
      function (item, index) {
        return (
          <option key={index} value={item.id}>
            {item.account_number} - {item.account_name}
          </option>
        );
      },
    );
  } else {
    accountSelectorOptions = <option key={0}></option>;
  }

  return (
    <tr className="transaction-row">
      <td>
        <select
          value={accountId}
          onChange={handleInputChange}
          className="table account-select"
        >
          {accountSelectorOptions}
        </select>
      </td>
      <td>
        <input
          className="table amount-debit"
          type="number"
          step=".01"
          value={debit}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          className="table amount-credit"
          type="number"
          step=".01"
          value={-1 * credit}
          onChange={handleInputChange}
        />
      </td>
    </tr>
  );
}

export default JournalEntryRow;

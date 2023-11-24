import React from "react";

function JournalEntryRow(props) {
  const doNothing = () => {};

  let accountSelectorOptions;

  if (props.availableAccounts) {
    accountSelectorOptions = Array.from(props.availableAccounts).map(
      function (item, index) {
        return (
          <option key={index} value={item.id}>
            {item.account_number} - {item.account_name}
          </option>
        );

        // }
      },
    );
  } else {
    accountSelectorOptions = <option key={0}></option>;
  }

  console.log('i am a row with account select value of: ' + props.accountId)
  return (
    <tr className="transaction-row">
      <td>
        <select
          value={props.accountId}
          onChange={doNothing}
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
          value={props.debit}
        />
      </td>
      <td>
        <input
          className="table amount-credit"
          type="number"
          step=".01"
          value={-1 * props.credit}
        />
      </td>
    </tr>
  );
}

export default JournalEntryRow;

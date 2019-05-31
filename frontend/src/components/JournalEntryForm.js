import React from 'react';

const JournalEntryRow = (props) => {
  let accountSelectorOptions = Array.from(props.availableAccounts).map(function(item) {
    return (
      <option key={item.account_number}>
        {item.account_number} - {item.account_name}
      </option>
    )
  })

  return (
    <tr>
      <td>
          <select className="account-select">
            {accountSelectorOptions}
          </select>
      </td>
      <td><input className="amount-debit" /></td>
      <td><input className="amount-credit" /></td>
    </tr>
  )
}

class JournalEntryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        availableAccounts: {},
        
        entry: {
          accounts: ['',''],
          debits: [0,0],
          credits: [0,0]
        },
        err: '',
        sumDebits: 0,
        sumCredits: 0,
        nRows: 2,
    } 
    this.selectorElements = document.getElementsByClassName('account-select')
    this.debitElements = document.getElementsByClassName('amount-debit')
    this.creditElements = document.getElementsByClassName('amount-credit')
  }

  async componentDidMount()  {
    const res = await fetch(`http://127.0.0.1:8000/accounts/`)
    const json = await res.json()
    this.setState({
        availableAccounts: json,
    })
  }

  handleChange = (event) => {
    event.preventDefault();
    let inputAccounts = []
    let inputDebits = []
    let inputCredits = []

    for (let el of this.selectorElements) { inputAccounts.push(el.value) }  
    for (let el of this.debitElements) { inputDebits.push(Number(el.value)) }  
    for (let el of this.creditElements) { inputCredits.push(Number(el.value)) }  
    
    function getSum(total, num) {return total + num}
    var sumDebits = inputDebits.reduce(getSum)
    var sumCredits = inputCredits.reduce(getSum)
    let err = (sumDebits === sumCredits ? '' : 'Debits and credits must net to $0.00')

    this.setState({
      entry: {
        'accounts' : inputAccounts,
        'debits' : inputDebits,
        'credits' : inputCredits
      },
      sumDebits : inputDebits.reduce(getSum),
      sumCredits : inputCredits.reduce(getSum),
      err: err
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
  }

  render () {
    const availableAccounts = this.state.availableAccounts
    return (
      <form onBlur={this.handleChange} id="journalEntryForm">
        <table align="center" className="table">
          <thead>
            <tr>
              <th scope="col">Account Name</th>
              <th scope="col">Debit</th>
              <th scope="col">Credit</th>
            </tr>
          </thead>
          <tbody>
            <JournalEntryRow availableAccounts={availableAccounts} />
            <JournalEntryRow availableAccounts={availableAccounts} />
            <JournalEntryRow availableAccounts={availableAccounts} />
            <JournalEntryRow availableAccounts={availableAccounts} />
          </tbody>
          <tfoot>
            <tr>
              <td>&nbsp;</td>
              <td>{this.state.sumDebits || 0}</td>
              <td>{this.state.sumCredits || 0}</td>
            </tr>
          </tfoot>
        </table>

        <p>{this.state.err}&nbsp;</p>

        <button type="button" onClick={this.addRow}>+1</button>&nbsp;
        <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
      </form>
    )
  }
}

export default JournalEntryForm




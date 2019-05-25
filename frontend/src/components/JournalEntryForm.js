import React from 'react';
import axios from 'axios';


class CustomForm extends React.Component {


  state = {
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

  selectorElements = document.getElementsByClassName('account-select')
  debitElements = document.getElementsByClassName('amount-debit')
  creditElements = document.getElementsByClassName('amount-credit')



  componentWillMount() {
      axios.get(`http://127.0.0.1:8000/accounts/`)
          .then(res=> {
              this.setState({
                  availableAccounts: res.data,
              })
          })
          .catch(error => {
              console.log(error)
          });
  }
 

  handleChange = (event) => {
    event.preventDefault();

    // Load state with current numbers
    this.collectEntries(event);

  }

  collectEntries = (event) => {
    event.preventDefault();
    
    let inputAccounts = []
    let inputDebits = []
    let inputCredits = []

    for (let el of this.selectorElements) { inputAccounts.push(el.value) }  
    for (let el of this.debitElements) { inputDebits.push(Number(el.value)) }  
    for (let el of this.creditElements) { inputCredits.push(Number(el.value)) }  
    
    function getSum(total, num) {
      return total + num;
    }

    var sumDebits = inputDebits.reduce(getSum)
    var sumCredits = inputCredits.reduce(getSum)
    
    if (sumDebits !== sumCredits) {
      this.setState({
        err: 'Debits and credits must net to $0.00'
      })
    } else {
        this.setState({
          err: ''
        })
    }
    this.setState({
      entry: {
        'accounts' : inputAccounts,
        'debits' : inputDebits,
        'credits' : inputCredits
      },
      sumDebits : inputDebits.reduce(getSum),
      sumCredits : inputCredits.reduce(getSum)

    });
  }

  errorCheck = (event) => {
    event.preventDefault();
    if (this.state.sumDebits !== this.state.sumCredits) {
      this.setState({
        err: 'Oh honey, debits must equal credits'
      }, () => { console.log('updating state')})
    } else {
        this.setState({
          err: ''
        })
    }
  }


  validateForm = (event) => {
    event.preventDefault()
    this.collectEntries(event)

    // function getSum(total, num) {
    //   return total + num;
    // }
    console.log("debits")
    console.log(this.state.entry.debits)
    // console.log(this.state.entry.debits).reduce(getSum)
    console.log("credits")
    console.log(this.state.entry.credits)
    // console.log(this.state.entry.credits).reduce(getSum)
}

  entryInputRow(props) {
    
    const options = Array.from(props).map(function(item) {
      return (
        <option key={item.account_number}
        >
          {item.account_number} - {item.account_name}
        </option>
      );
    });
    return (
      <tr>
        <th scope="row">1</th>
        <td>
            <select className="account-select">
              {options}
            </select>
        </td>
        <td><input className="amount-debit" /></td>
        <td><input className="amount-credit" /></td>
      </tr>
    )
  }



  handleFormSubmit = async (event) => {
    event.preventDefault();

    let selectorElements = document.getElementsByClassName('account-select')
    // console.log(selectorElements)
 
    let inputAccounts = []
    for (let el of selectorElements) {
      inputAccounts.push(el.value)
    }  
    
    let debitElements = document.getElementsByClassName('amount-debit')
    let inputDebits = []
    for (let el of debitElements) {
      inputDebits.push(el.value)
    }  

    let creditElements = document.getElementsByClassName('amount-credit')
    let inputCredits = []
    for (let el of creditElements) {
      inputCredits.push(el.value)
    }  
    

    // TODO: Validate inpuits and submit POST request
    console.log(inputAccounts)
    console.log(inputDebits)
    console.log(inputCredits)

  }



  render () {
    return (

      <form onBlur={this.handleChange} id="journalEntryForm">
          <table className="table">
              <thead>
                  <tr>
                      <th scope="col">Account Number</th>
                      <th scope="col">Account Name</th>
                      <th scope="col">Debit</th>
                      <th scope="col">Credit</th>
                  </tr>
              </thead>
              <tbody>
                  {this.entryInputRow(this.state.availableAccounts)}
                  {this.entryInputRow(this.state.availableAccounts)}

              </tbody>
              <tfoot>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>{this.state.sumDebits || 0}</td>
                  <td>{this.state.sumCredits || 0}</td>
                </tr>
              </tfoot>

          </table>
          {/* <br/> */}
          <p>{this.state.err}&nbsp;</p>
          <button type="button" onClick={this.addRow}>+1</button>&nbsp;
          <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
      </form>

    )
  }
}

export default CustomForm




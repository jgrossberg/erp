import React from 'react';
import axios from 'axios';

import { Form, Input, Select, Button} from 'antd';

const Option = Select.Option;
const InputGroup = Input.Group;
const FormItem = Form.Item;



class CustomForm extends React.Component {


  state = {
      availableAccounts: {},
  } 

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
  
  entryInputRow(props) {
    
    const options = Array.from(props).map(function(item) {
      return (
        <Option key={item.account_number}
          size="small"
        >
          {item.account_number} - {item.account_name}
        </Option>
      );
    });
    return (
      <FormItem
        style = {{
          marginBottom: "-17px"
        }}
      >
        <InputGroup 
          compact
        >  
          <Select 
            size="small"
            className="account_select"
            defaultValue="Account" 
            style={{ width: '60%' }}
            id="account">
            { options }
          </Select>
          <Input 
            size="small"
            className="amount_debit" 
            defaultValue="" 
            style={{ width: '20%' }}/>
          <Input 
            size="small"
            className ="amount_credit" 
            defaultValue="" 
            style={{ width: '20%' }}/>
        </InputGroup>  

      </FormItem>
    )
  }


  handleFormSubmit = async (event) => {
    event.preventDefault();

    let selectorElements = document.getElementsByClassName('account_select')
    let inputAccounts = []
    for (let el of selectorElements) {
      inputAccounts.push(el.textContent)
    }  
    
    let debitElements = document.getElementsByClassName('amount_debit')
    let inputDebits = []
    for (let el of debitElements) {
      inputDebits.push(el.value)
    }  

    let creditElements = document.getElementsByClassName('amount_credit')
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
    console.log(this.state)
    return (
      <div style={{ 
        background: '#fff',
        padding: 24, 
        minHeight: 280, 
        width: '80%', 
        marginLeft: 'auto', 
        marginRight: 'auto' }}
      >
        <Form 
          onSubmit={this.handleFormSubmit}>
          
          {this.entryInputRow(this.state.availableAccounts)}
          {this.entryInputRow(this.state.availableAccounts)}
          {this.entryInputRow(this.state.availableAccounts)}
          {this.entryInputRow(this.state.availableAccounts)}


          <br /> 
          <br /> 
          <br /> 
          <Button htmlType="submit">
              Submit
          </Button>

        </Form>    

      </div>
    )
  }
}

export default CustomForm




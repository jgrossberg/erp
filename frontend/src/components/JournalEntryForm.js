import React from 'react';

import { Form, Input, Select, Button} from 'antd';

const Option = Select.Option;
const InputGroup = Input.Group;
const FormItem = Form.Item;



class CustomForm extends React.Component {


  entryInputRow(props) {
    // console.log('got this as props: ')
    // console.log(props)

    const options = Array.from(props.data).map(function(item) {
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

    let selectorElements = document.querySelectorAll('div.ant-select-selection-selected-value')
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
    
    console.log(inputAccounts)
    console.log(inputDebits)
    console.log(inputCredits)

  }


  render () {
    // console.log(this.props)
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
          
          {this.entryInputRow(this.props)}
          {this.entryInputRow(this.props)}
          {this.entryInputRow(this.props)}
          {this.entryInputRow(this.props)}
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




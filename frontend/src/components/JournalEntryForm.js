import React from 'react';

import { Form, Input, Select, Button} from 'antd';

const Option = Select.Option;
const InputGroup = Input.Group;
const FormItem = Form.Item;



class CustomForm extends React.Component {


  entryInputRow(props) {
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
            {/* { this.optionsArray(props) } */}
          </Select>
          <Input 
            size="small"
            id ="amount_debit" 
            defaultValue="-" 
            style={{ width: '20%' }}/>
          <Input 
            size="small"
            id ="amount_credit" 
            defaultValue="-" 
            style={{ width: '20%' }}/>
        </InputGroup>  

      </FormItem>
    )
  }




  handleFormSubmit = async (event) => {
    event.preventDefault();
    // var elEntryAccount  = document.getElementById('account').textContent;
    // var elEntryAmount  = document.getElementById('amount');

    console.log(event.target.elements)
    // console.log(elEntryAccount)
    // console.log(elEntryAmount.value)
    
  }

  render () {

    
    return (
      <div style={{ 
        background: '#fff',
        padding: 24, 
        minHeight: 280, 
        width: '80%', 
        marginLeft: 'auto', 
        marginRight: 'auto' }}
      >

      {/* {this.entryForm} */}
        <Form 
          // style = {{ marginBottom: '0px' }}
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




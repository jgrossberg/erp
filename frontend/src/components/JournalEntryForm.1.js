import React from 'react';

import { Input, Select, Button } from 'antd';

const Option = Select.Option;



class CustomForm extends React.Component {

  accountSelector(props) {
    
    const options = Array.from(props.data).map(function(item) {
      return (
        <Option key={item.account_number}>
          {item.account_number} - {item.account_name}
        </Option>
      );
    });
    
    return (
      <Select defaultValue="Account" style={{ width: '500px' }}>
        
        {options}

      </Select>  
    )
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    

  }

  render () {
    return (


      <div style={{ 
        background: '#fff',
        padding: 24, 
        minHeight: 280, 
        width: '800px', 
        marginLeft: 'auto', 
        marginRight: 'auto' }}
      >
        <div style={{ marginBottom: -1 }}>
          <Input
           name="debit" 
           addonBefore={this.accountSelector(this.props)} 
           defaultValue="0.00" />
        </div>
        <div style={{ marginBottom: -1    }}>
          <Input 
            name="credit" 
            addonBefore={this.accountSelector(this.props)} 
            defaultValue="0.00" />
        </div>
        <br />
        <Button htmlType="submit">
            Submit
        </Button>
  
      </div>




    )

  }
}
export default CustomForm




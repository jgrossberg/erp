import React, { PureComponent } from 'react';
import PropTypes from "prop-types";


export default class AccountRow extends PureComponent {
    static propTypes = {
        accountName: PropTypes.string,
        accountNumber: PropTypes.string
    }
    
        render() {
            return (
                <tr>
                    <td>{this.props.accountNumber}</td>
                    <td>{this.props.accountName}</td>
                    <td>$0.00</td>
                    <td>2018-05-04</td>
                </tr>        
            )
        }
}

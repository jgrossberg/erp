import React from 'react';
import axios from 'axios';

class AccountList extends React.Component {

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
    renderTableRow = () => {
        // const {accountName}  = this.props.accountName
        return (
            <tr>
                <td>1000</td>
                <td>
                    Cash
                </td>
                <td>$0.00</td>
                <td>2018-05-04</td>
            </tr>
        )
    }
    renderTable = () => {
        return (       
            <table className="account-listing">
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Account Name</th>
                    <th>Current Balance</th>
                    <th>Last Hit On</th>
                </tr>
            </thead>
            <tbody>
                {this.renderTableRow()}
                <tr>
                    <td>1000</td>
                    <td>
                        Cash
                    </td>
                    <td>$0.00</td>
                    <td>2018-10-25</td>
                </tr>
                <tr>
                    <td>1100</td>
                    <td>
                        Accounts Receivable
                    </td>
                    <td>$0.00</td>
                    <td>2018-10-25</td>
                </tr>


            </tbody>

        </table>
        )
    }





    render() {
        return (
            <div>
                {this.renderTable()}
                <button type="button">+1</button>&nbsp;
            </div>
        )
    }
}

export default AccountList;
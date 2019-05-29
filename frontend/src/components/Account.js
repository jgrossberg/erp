import React from 'react';
import axios from 'axios';

import AccountRow from './AccountRow'


class AccountList extends React.Component {

    state = {
        isLoading: true,
        availableAccounts: {},
    }

    componentWillMount() {
        axios.get(`http://127.0.0.1:8000/accounts/`)
            .then(res=> {
                this.setState({
                    availableAccounts: res.data,
                    isLoading: false,
                    hasError: false
                })
            })
            .catch(error => {
                console.log(error)
            });
    }
   
    renderTable = () => {

        return (       
            <table align="center" className="account-listing">
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Account Name</th>
                        <th>Current Balance</th>
                        <th>Last Hit On</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.availableAccounts.map((account, i) => (
                        <AccountRow key={i}
                        accountName={account.account_name}
                        accountNumber={account.account_number}/>
                    ))}
                </tbody>
            </table>
        )
    }

    render() {
        const isLoading = this.state.isLoading
        if (!isLoading) {
            return (
                <div>
                    {this.renderTable()}
                    {/* <FunFunction/> */}
                    <button type="button">+1</button>&nbsp;
                </div>
             )
        } else {
            return (
                <div>&nbsp;</div>
            )
        }
    }
}

export default AccountList;
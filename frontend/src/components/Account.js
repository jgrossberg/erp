import React from 'react';

const AccountRow = (props) => {
    return (
        <tr>
        <td>{props.accountNumber}</td>
        <td>{props.accountName}</td>
        <td>$0.00</td>
        <td>2018-05-04</td>
    </tr>  
    )
}

const AccountTable = (props) => {
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
                {props.data.map(account => (
                    <AccountRow key={account.id}
                    accountName={account.account_name}
                    accountNumber={account.account_number}/>
                ))}
            </tbody>
        </table>
    )
}

class AccountList extends React.Component {

    render() {
        return (
            <div>
                <AccountTable data={this.props.data}/>
                <button type="button">+1</button>&nbsp;
            </div>
        )
    }
}

export default AccountList;
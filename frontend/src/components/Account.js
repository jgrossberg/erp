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
   
    render() {
        return (
            <div>
            <ul className="">
                <li className="account-list-item">1001</li>
                <li className="account-list-item">1010</li>
                <li className="account-list-item">2000</li>
                <li className="account-list-item">3000</li>
                <li className="account-list-item">4000</li>
            </ul>
        </div>
        )
    }
}

export default AccountList;
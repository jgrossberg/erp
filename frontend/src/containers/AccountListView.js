import React from 'react';

import AccountList from '../components/Account';

class Accounts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: [],
            isLoading: true
        }        
    }

    async componentDidMount()  {
        const res = await fetch(`http://127.0.0.1:8000/accounts/`)
        const json = await res.json()
        this.setState({
            accounts: json,
            isLoading: false
        })
    }

    render () {
        const isLoading = this.state.isLoading
        return (
            <div>
                {!isLoading ? <AccountList data={this.state.accounts}/> : "No data"}
            </div>
            )
        }
}

export default Accounts


import React from 'react';
import axios from 'axios';

import JournalEntryForm from '../components/JournalEntryForm';


class JournalEntry extends React.Component {



    state = {
        accounts: {},
    } 

    

    componentWillMount() {
        axios.get(`http://127.0.0.1:8000/accounts/`)
            .then(res=> {
                this.setState({
                    accounts: res.data,
                });
                this.availableAccounts = res.data;
                console.log('sending this into props:')
                console.log(this.availableAccounts)
            })
            .catch(error => {
                console.log(error)
            });
    }
   
    render () {

        console.log(this.availableAccounts)
        console.log('was it good? ^^')
        return (

            <div>
                <JournalEntryForm data={this.state.accounts}/>
                {/* <JournalEntryForm data={this.availableAccounts}/> */}
            </div>

        )
    }
}

export default JournalEntry


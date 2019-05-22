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
            })
            .catch(error => {
                console.log(error)
            });
    }
   
    render () {
        return (

            <div>
                <JournalEntryForm data={this.state.accounts}/>
            </div>

        )
    }
}

export default JournalEntry


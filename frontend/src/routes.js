import React from 'react';
import { Route } from 'react-router-dom';

import JournalEntry from './containers/JournalEntryView';
import Accounts from './containers/AccountListView';

const BaseRouter  = () => (
    <div>
        <Route exact path='/' component={JournalEntry} />
        <Route exact path='/accounts' component={Accounts} />
    </div>
);

export default BaseRouter;

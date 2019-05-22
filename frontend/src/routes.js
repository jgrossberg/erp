import React from 'react';
import { Route } from 'react-router-dom';

import JournalEntry from './containers/JournalEntryView';


const BaseRouter  = () => (
    <div>
        <Route exact path='/' component={JournalEntry} />
    </div>

);

export default BaseRouter;

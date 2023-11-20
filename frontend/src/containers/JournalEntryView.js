import React from 'react';

import JournalEntryForm from '../components/JournalEntryForm';


const TemplateSelector = (props) => {
    const handleTemplateSelect = (event) => {
        console.log(event.target.value)
        // dispatchEvent(new Event('templateSelect'))
    }

    let templates = Array.from(props.templates).map(item => {
        return (
          <option key={item.name}>
            {item.name}
          </option>
        )
      })

    return (
        <div>
            <select onChange={handleTemplateSelect}>
                {templates}
            </select>
        </div>
    )
}

function JournalEntry() {
        return (
            <div>
                <TemplateSelector templates={templates} onChange={this.handleTemplateSelect}/>
                <JournalEntryForm debits={debits} credits={credits}/>
            </div>
        )
}

export default JournalEntry


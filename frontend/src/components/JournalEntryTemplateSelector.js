import React from "react";


const JournalEntryTemplateSelector = (props) => {
    const handleTemplateSelect = (event) => {
        console.log(event.target)
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
            <select className="template-selector" onChange={handleTemplateSelect}>
                {templates}
            </select>
        </div>
    )
}

export default JournalEntryTemplateSelector
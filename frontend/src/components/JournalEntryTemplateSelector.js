import React from "react";


const JournalEntryTemplateSelector = ({setTemplate, templates}) => {
    const handleTemplateSelect = (event) => {
        console.log(event.target)
        setTemplate(event.target.value)
    }

    let templateOptions = Array.from(templates).map(item => {
        return (
          <option key={item.name}>
            {item.name}
          </option>
        )
      })

    return (
        <div>
            <select className="template-selector" onChange={handleTemplateSelect}>
                {templateOptions}
            </select>
        </div>
    )
}

export default JournalEntryTemplateSelector
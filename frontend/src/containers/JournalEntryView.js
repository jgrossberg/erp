import React, { useState, useEffect } from "react";

import JournalEntryForm from "../components/JournalEntryForm";
import JournalEntryTemplateSelector from "../components/JournalEntryTemplateSelector";


function JournalEntry() {

  const [templates, setTemplates] = useState([]);
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/templates/`)
      .then((response) => response.json())
      .then((data) => setTemplates(data));
    }, [])

    let legs = [
      {
        accountId: 1001,
        amount: 3000
      },
      {
        accountId: 1002,
        amount: -3000
      },
    ]
    console.log(templates[0])

    if (templates.length > 0) {
      legs = templates[0].accounts
    }



  return (
    <div>
      <JournalEntryTemplateSelector templates={templates} />
      <JournalEntryForm legs={legs}/>
    </div>
  );

}

export default JournalEntry;

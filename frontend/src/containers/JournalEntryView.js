import React, { useState, useEffect } from "react";

import JournalEntryForm from "../components/JournalEntryForm";
import JournalEntryTemplateSelector from "../components/JournalEntryTemplateSelector";

const makeLegsFromTemplate = (accounts) => {
  console.log("a tmeple has been selected -view")
  console.log("the template is " + accounts)
}

function JournalEntry() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/templates/`)
      .then((response) => response.json())
      .then((data) => setTemplates(data));
  }, []);

  if (template.length > 0) {
    makeLegsFromTemplate(template)
  }

  const matchingTemplate = templates.filter((fetchedTemplate) => fetchedTemplate.name === template)[0];

  let legs
  if (matchingTemplate && matchingTemplate.accounts && matchingTemplate.accounts.length > 0) {
    console.log('we matched a templates? '  + matchingTemplate.accounts)
    legs = matchingTemplate.accounts
  } else {
    legs = [
      {
        accountId: 1001,
        amount: 0,
      },
      {
        accountId: 1001,
        amount: 0,
      },
    ];
  } 

  return (
    <div>
      <JournalEntryTemplateSelector
        onChange={setTemplate}
        templates={templates}
      />
      {/* <JournalEntryForm legs={legs} template={template} /> */}
      <JournalEntryForm legs={legs} />
    </div>
  );
}

export default JournalEntry;

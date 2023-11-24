import React, { useState, useEffect } from "react";

import JournalEntryForm from "../components/JournalEntryForm";
import JournalEntryTemplateSelector from "../components/JournalEntryTemplateSelector";

function JournalEntry() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/templates/`)
      .then((response) => response.json())
      .then((data) => setTemplates(data));
  }, []);


  const matchingTemplate = templates.filter(
    (fetchedTemplate) => fetchedTemplate.name === template,
  )[0];

  let legs;
  if (
    matchingTemplate &&
    matchingTemplate.accounts &&
    matchingTemplate.accounts.length > 0
  ) {
    legs = matchingTemplate.accounts;
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

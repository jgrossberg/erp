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

  let legs;
  if (templates.length > 0) {
    legs = templates[0].accounts;
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
        setTemplate={setTemplate}
        templates={templates}
      />
      <JournalEntryForm legs={legs} template={template} />
    </div>
  );
}

export default JournalEntry;

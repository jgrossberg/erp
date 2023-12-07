import React, { useState, useEffect } from "react";

import JournalEntryForm from "../components/JournalEntryForm";
import JournalEntryTemplateSelector from "../components/JournalEntryTemplateSelector";

const defaultTransactions = () => {
  return [
    {
      account: "1001",
      accountId: 1001,
      amount: 10,
    },
    {
      account: "1002",
      accountId: 1002,
      amount: -10,
    },
  ];
};

function JournalEntry() {
  const [availableTemplates, setAvailableTemplates] = useState([]);
  const [transactions, setTransactions] = useState(defaultTransactions());

  const handleTemplateSelect = (selectedTemplateName) => {
    console.info("template selected: " + selectedTemplateName);
    const matchingTemplate = availableTemplates.filter(
      (template) => template.name === selectedTemplateName,
    )[0];
    if (
      matchingTemplate &&
      matchingTemplate.accounts &&
      matchingTemplate.accounts.length > 0
    ) {
      let legs = matchingTemplate.accounts;
      console.log("template match found, legs: " + JSON.stringify(legs));
      setTransactions(legs);
    }
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/templates/`)
      .then((response) => response.json())
      .then((data) => setAvailableTemplates(data));
  }, []);

  return (
    <div>
      <JournalEntryTemplateSelector
        onChange={handleTemplateSelect}
        templates={availableTemplates}
      />
      <JournalEntryForm
        legs={transactions}
        transactions={transactions}
        onChange={setTransactions}
      />
    </div>
  );
}

export default JournalEntry;

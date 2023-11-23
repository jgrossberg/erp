import React, { useState, useEffect } from "react";

import JournalEntryForm from "../components/JournalEntryForm";

function JournalEntry() {

  const [templates, setTemplates] = useState([]);
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/templates/`)
      .then((response) => response.json())
      .then((data) => setTemplates(data));

    }, [])
    console.log(templates)
  return (
    <div>
      <JournalEntryForm />
    </div>
  );

}

export default JournalEntry;

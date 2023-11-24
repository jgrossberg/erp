import React from "react";

const JournalEntryTemplateSelector = ({ onChange, templates }) => {
  const handleTemplateSelect = (event) => {
    onChange(event.target.value);
  };

  let templateOptions = Array.from(templates).map((item) => {
    return (
      <option key={item.name} value={item.id}>
        {item.name}
      </option>
    );
  });

  return (
    <div>
      <select className="template-selector" onChange={handleTemplateSelect}>
        {templateOptions}
      </select>
    </div>
  );
};

export default JournalEntryTemplateSelector;

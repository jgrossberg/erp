import React, { useState, useEffect } from "react";

import AccountList from "../components/Account";

function Accounts(props) {
  const [accounts, setAccounts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/accounts/`)
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data);
        setIsLoading(false);
      });
  }, []);

  return <div>{!isLoading ? <AccountList data={accounts} /> : "No data"}</div>;
}

export default Accounts;

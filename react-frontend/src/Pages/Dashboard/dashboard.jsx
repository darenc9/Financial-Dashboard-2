import { useEffect, useState } from "react";
import AccountList from "../../components/Account-Balance/Account-List/account-list";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchBankAccounts = async () => {
      try {
        const response = await fetch("http://localhost:8080/balances", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setAccounts(data.accounts);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchBankAccounts();
  }, []);
  return (
    <div className={styles.dashboardContainer}>
      <AccountList accounts={accounts} />
    </div>
  );
};

export default Dashboard;

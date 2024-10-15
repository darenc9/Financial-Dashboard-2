import { useLayoutEffect, useState } from "react";
import AccountList from "../../components/Account-Balance/Account-List/account-list";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);

  useLayoutEffect(() => {
    const fetchBankAccounts = async () => {
      const response = [
        {
          type: "Banking Accounts",
          count: 2,
          balance: "6,200.00 CAD",
          buttonText: "VIEW",
        },
        {
          type: "Investment Account",
          count: 1,
          balance: "1,200.00 CAD",
          buttonText: "VIEW",
        },
        {
          type: "Credit Card Account",
          count: 0,
          balance: "N/A",
          buttonText: "OPEN CARD",
        },
      ];
      setAccounts(response);
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

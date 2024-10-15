import { useLayoutEffect, useState } from "react";
import AccountList from "../../components/Account-Balance/Account-List/account-list";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);

  useLayoutEffect(() => {
    const fetchBankAccounts = async () => {
      const response = [
        {
          accountName: "Savings Account",
          balance: "5,000",
          currency: "CAD",
        },
        {
          accountName: "Chequing Account",
          balance: "1,200",
          currency: "CAD",
        },
        {
          accountName: "Investment Account",
          currency: "CAD",
          balance: "5,000",
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

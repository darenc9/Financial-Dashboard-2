import { useLayoutEffect, useState } from "react";
import AccountList from "../../components/Account-Balance/Account-List/account-list";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);

  // use this this and not useEffect beacuse this is synchronous
  // and ensures component only renders when the data is fetched, this will prevent flicing as i didn't want to incoporate a loading spinner

  useLayoutEffect(() => {
    const fetchBankAccounts = async () => {
      const response = await fetch("http://localhost:8080/balances", {
        headers: {
          "Content-Type": "application/json",
        },
      });
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

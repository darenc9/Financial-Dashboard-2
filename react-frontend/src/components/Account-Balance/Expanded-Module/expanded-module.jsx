import AccountDetails from "../Account-Details/account-details";
import Button from "../../Button/button";

import styles from "./expanded-module.module.css";

const ExpandedModule = ({ accounts, setExpandedCategory }) => {
  return (
    <>
      <div className={styles.expandedModule}>
        {accounts.map((account, index) => (
          <AccountDetails key={index} accounts={account} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button text="Open New Account" />
        <Button text="Close" onClick={() => setExpandedCategory(null)} />
      </div>
    </>
  );
};

export default ExpandedModule;

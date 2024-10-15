import Button from "../../Button/button";
import styles from "./account-list.module.css";

const AccountList = ({ accounts }) => {
  if (!accounts || accounts.length === 0) {
    return (
      <div className={styles.noAccounts}>
        <p>No accounts available at the moment.</p>
      </div>
    );
  }

  return (
    <div className={styles.accountList}>
      {accounts.map((account, index) => (
        <div key={index} className={styles.account}>
          <div className={styles.accountDetails}>
            <span>{`${account.type} (${account.count})`}</span>
          </div>

          <div className={styles.balanceAndButtonContainer}>
            <span className={styles.balance}>
              {account.count === 0 ? "" : `Total Balance: $${account.balance}`}
            </span>
            <Button text={account.count === 0 ? "Open Account" : "View"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountList;

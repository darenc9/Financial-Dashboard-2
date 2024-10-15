import styles from "./account.details.module.css";

const AccountDetails = ({ accounts }) => {
  const { accountName, balance, currency } = accounts;
  return (
    <div className={styles.accountDetails}>
      <span className={styles.accountName}>{accountName}</span>
      <span className={styles.accountBalance}>
        {"Balance: "}
        {`$${balance} ${currency}`}
      </span>
    </div>
  );
};

export default AccountDetails;

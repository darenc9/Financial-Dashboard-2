import styles from "./main-header.module.css";

const MainHeader = ({ children }) => {
  return <header className={styles.mainHeader}>{children}</header>;
};

export default MainHeader;

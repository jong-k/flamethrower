import styles from "../styles/ExpandablePanel.module.scss";

const ExpandablePanel = ({ header, children }) => {
  return (
    <div key={user.id} className={styles.outer}>
      <div className={styles.middle}>
        <div className={styles.inner}>{header}</div>
      </div>
      <div className={styles.temp}>{children}</div>
    </div>
  );
};

export default ExpandablePanel;

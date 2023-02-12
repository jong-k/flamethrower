import styles from "../styles/ExpandablePanel.module.scss";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.outer}>
      <div className={styles.middle}>
        <div className={styles.inner}>{header}</div>
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className={styles.temp}>{children}</div>}
    </div>
  );
};

export default ExpandablePanel;

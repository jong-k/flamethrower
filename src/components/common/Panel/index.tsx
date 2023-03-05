import styles from "./index.module.scss";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface PropType {
  header: JSX.Element;
  children: JSX.Element;
}

const Panel = ({ header, children }: PropType) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        <div className={styles.inner}>{header}</div>
        <div
          style={{ cursor: "pointer", marginRight: "0.5rem" }}
          onClick={handleClick}
        >
          {expanded ? (
            <GoChevronDown style={{ scale: "175%" }} />
          ) : (
            <GoChevronLeft style={{ scale: "175%" }} />
          )}
        </div>
      </div>
      {expanded && <div className={styles.temp}>{children}</div>}
    </div>
  );
};

export default Panel;

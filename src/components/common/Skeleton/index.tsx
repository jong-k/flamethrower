import styles from "./index.module.scss";

interface PropsType {
  times: number;
}

const Skeleton = ({ times }: PropsType) => {
  const boxes = Array.from({ length: times }, (_, i) => {
    return (
      <div
        key={i}
        className={styles.outer}
        style={{ width: "100%", height: "2.5rem" }}
      >
        <div className={styles.inner} />
      </div>
    );
  });
  return <>{boxes}</>;
};

export default Skeleton;

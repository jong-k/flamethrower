import styles from "../styles/Skeleton.module.scss";

interface PropsType {
  times: number;
}

const Skeleton = ({ times }: PropsType) => {
  const boxes = Array.from({ length: times }, (_, i) => {
    return (
      <div
        key={i}
        className={styles.outer}
        style={{ width: "100%", height: "10rem" }}
      >
        <div className={styles.inner} />
      </div>
    );
  });
  return <>{boxes}</>;
};

export default Skeleton;

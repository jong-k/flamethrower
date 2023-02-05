import classNames from "classnames";

interface PropsType {
  times: number;
}

const Skeleton = ({ times }: PropsType) => {
  const boxes = Array.from({ length: times }, (_, i) => <div key={i} />);
  return boxes;
};

export default Skeleton;

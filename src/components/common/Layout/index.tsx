import styles from "./index.module.scss";

interface PropType {
  children: JSX.Element;
}

const Layout = ({ children }: PropType) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;

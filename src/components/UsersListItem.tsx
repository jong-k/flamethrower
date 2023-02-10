import { GoTrashcan } from "react-icons/go";
import styles from "../styles/UsersListItem.module.scss";
import { removeUser, useThunk } from "../store";
import Button from "./Button";

export interface UserType {
  name: string;
  id: number;
}

interface PropsType {
  user: UserType;
}

const UsersListItem = ({ user }: PropsType) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div key={user.id} className={styles.outer}>
      <div className={styles.middle}>
        <div className={styles.inner}>
          <Button loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {error && <div>Error deleting user</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;

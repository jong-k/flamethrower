import { useCallback, useState } from "react";
import { useAppDispatch } from "../hooks";
// import { type UserType } from "./addUser";

export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const dispatch = useAppDispatch();

  const runThunk = useCallback((arg) => {
    setIsLoading(true);
    // dispatch가 반환하는 fullfilled 된 promise를 에러처리 하려면
    // unwrap 프로퍼티를 사용
    dispatch(thunk(arg))
      .unwrap()
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [runThunk, isLoading, error];
};

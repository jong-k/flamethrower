import { useCallback, useState } from "react";
import { useAppDispatch } from "../hooks";
import { type AsyncThunk } from "@reduxjs/toolkit";
import { type UserType } from "../../components/UserListItem";

interface ArgType {
  typePrefix: string;
  payloadCreator: UserType[];
}

export const useThunk = (thunk: AsyncThunk<any, any, any>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  const runThunk = useCallback((arg: ArgType) => {
    setIsLoading(true);
    // unwrap : dispatch가 반환하는 fulfilled promise를 언패킹
    dispatch(thunk(arg))
      .unwrap()
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [runThunk, isLoading, error];
};

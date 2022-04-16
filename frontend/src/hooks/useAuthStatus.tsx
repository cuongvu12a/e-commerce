import { useEffect, useState } from 'react';

import { STORAGE_KEYS, StorageGetItem } from '@api';
import { useDispatch, useSelector, getProfile } from '@store';

export const useAuthStatus = () => {
  const [isChecking, setIsChecking] = useState(true);
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector().auth;
  useEffect(() => {
    if (loading) return;
    if (!!userInfo) return setIsChecking(false);
    const token = StorageGetItem(STORAGE_KEYS.TOKEN);
    if (!token) return setIsChecking(false);
    dispatch(getProfile());
    return setIsChecking(false);
  }, [userInfo, error, loading]);

  return { userInfo, isChecking, error };
};

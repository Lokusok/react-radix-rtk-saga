import { useAppDispatch, useAppSelector } from '@src/store';

import { createUserStart } from '@src/store/slices/users';
import UserForm from '@src/components/user-form';

import { TUser } from '@src/store/slices/users/types';
import { useEffect, useRef, useState } from 'react';

function UsersCreate() {
  const dispatch = useAppDispatch();
  const waiting = useAppSelector((state) => state.users.waiting);
  const users = useAppSelector((state) => state.users.list);
  const error = useAppSelector((state) => state.users.error);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const prevUsersRef = useRef(users);

  const handleSubmit = (user: TUser) => {
    dispatch(createUserStart(user));
  };

  useEffect(() => {
    if (!error && users.length > prevUsersRef.current.length) {
      setShowSuccess(true);
    } else if (error) {
      setShowError(true);
    }

    return () => {
      prevUsersRef.current = users;
      setShowSuccess(false);
      setShowError(false);
    };
  }, [error, users]);

  return (
    <UserForm
      disabled={waiting}
      onSubmit={handleSubmit}
      showSuccess={showSuccess}
      showError={showError}
    />
  );
}

export default UsersCreate;

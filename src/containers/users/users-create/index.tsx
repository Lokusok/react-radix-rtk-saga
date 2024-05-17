import { useAppDispatch, useAppSelector } from '@src/store';

import { createUserStart } from '@src/store/slices/users';
import UserForm from '@src/components/user-form';

import { TUser } from '@src/store/slices/users/types';

function UsersCreate() {
  const dispatch = useAppDispatch();
  const waiting = useAppSelector((state) => state.users.waiting);

  const handleSubmit = (user: TUser) => {
    dispatch(createUserStart(user));
  };

  return <UserForm disabled={waiting} onSubmit={handleSubmit} />;
}

export default UsersCreate;

export type TUsersInitialState = {
  waiting: boolean;
  list: Array<TUser>;
  error: string | null;
  activeUserId: string | null;
};

export type TUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

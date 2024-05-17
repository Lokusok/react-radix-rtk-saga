import { useCallback, useEffect } from 'react';
import { TicketX } from 'lucide-react';
import { Callout, Kbd, Skeleton, Table } from '@radix-ui/themes';

import { useAppDispatch, useAppSelector } from '@src/store';
import {
  deleteUserStart,
  fetchUsersStart,
  setActiveUserId,
} from '@src/store/slices/users';
import UserRow from '@src/components/user-row';
import { TUser } from '@src/store/slices/users/types';

function UsersTable() {
  const dispatch = useAppDispatch();

  const activeUserId = useAppSelector((state) => state.users.activeUserId);
  const searchQuery = useAppSelector((state) => state.search.searchQuery);
  const users = useAppSelector((state) => state.users.list);
  const waiting = useAppSelector((state) => state.users.waiting);
  const error = useAppSelector((state) => state.users.error);

  const fetchUsers = useCallback(
    () => dispatch(fetchUsersStart(searchQuery)),
    [dispatch, searchQuery]
  );

  const handleEditActionClick = () => {
    console.log('handleEditActionClick');
  };

  const handleDeleteActionClick = (user: TUser) => {
    dispatch(setActiveUserId(user.id));
  };

  const handleDelete = (user: TUser) => {
    dispatch(deleteUserStart(user.id));
  };

  const handleDialogReject = () => {
    dispatch(setActiveUserId(null));
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (!error) return;

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.code === 'KeyR') {
        fetchUsers();
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [fetchUsers, error]);

  if (error) {
    return (
      <Callout.Root color="red">
        <Callout.Icon>
          <TicketX />
        </Callout.Icon>
        <Callout.Text>
          Ошибка. .Нажмите &nbsp;<Kbd>Shift + R</Kbd>,&nbsp; чтобы запросить
          пользователей снова.
        </Callout.Text>
      </Callout.Root>
    );
  }

  if (!waiting && users.length <= 0) {
    return (
      <Callout.Root color="blue">
        <Callout.Icon>
          <TicketX />
        </Callout.Icon>
        <Callout.Text>Пользователей не найдено.</Callout.Text>
      </Callout.Root>
    );
  }

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Имя пользователя</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Почта</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Телефон</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Действия</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      {waiting ? (
        <Table.Body>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Table.Row key={index}>
                <Table.Cell colSpan={4}>
                  <Skeleton height="20px" />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      ) : (
        <Table.Body>
          {users.map((user) => (
            <>
              <UserRow
                key={user.id}
                user={user}
                disableButtons={activeUserId === user.id}
                onEditActionClick={handleEditActionClick}
                onDeleteActionClick={() => handleDeleteActionClick(user)}
                onDialogReject={handleDialogReject}
                deleteByDialog={true}
                onDelete={() => handleDelete(user)}
              />
            </>
          ))}
        </Table.Body>
      )}
    </Table.Root>
  );
}

export default UsersTable;
